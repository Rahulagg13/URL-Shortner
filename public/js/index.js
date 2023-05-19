const form = document.querySelector(".form");
console.log(form);
const handleForm = async ({ fullUrl }) => {
  try {
    const fetchUrl = await fetch("http://localhost:8000/url", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ fullUrl }),
    });
    console.log(fetchUrl);
    if (!fetchUrl.ok) throw new Error();
    const fetchUrlData = await fetchUrl.json();
    if (fetchUrlData.status === "success") {
      window.setTimeout(() => {
        location.assign("/");
      }, 200);
    }
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullUrl = document.getElementById("fullUrl").value;
  handleForm({ fullUrl });
});
