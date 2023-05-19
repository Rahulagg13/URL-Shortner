const express = require("express");
const app = express();
const path = require("path");
const urlRoutes = require("./routes/urlRoutes");
const viewUrlRoutes = require("./routes/viewUrlRoute");
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
// app.use((req, res, next) => {
//   console.log(req.body);
//   next();
// });
app.use("/", viewUrlRoutes);
app.use("/url", urlRoutes);

module.exports = app;
