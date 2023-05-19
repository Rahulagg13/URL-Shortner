const URL = require("../Model/url");

const getAllidOverview = async (req, res) => {
  try {
    const allUrl = await URL.find({});

    res.status(200).render("index", {
      title: "All urls",
      urls: allUrl,
    });
  } catch (err) {
    console.log(err);
  }
};

const getidOverview = async (req, res) => {
  try {
    const shortID = await URL.findOne({ shortId: req.params.id });
    if (!shortID) throw new Error();
    res.status(200).redirect(shortID.redirectUrl);
  } catch (err) {
    console.log(err);
  }
};

const getPostId = (req, res) => {
  res.render("/");
};
module.exports = {
  getAllidOverview,
  getidOverview,
  getPostId,
};
