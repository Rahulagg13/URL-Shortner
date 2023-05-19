const URL = require("../Model/url");

const getAllid = async (req, res) => {
  try {
    const urls = await URL.find({});
    res.status(200).json({
      status: "success",
      data: {
        urls,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
const updatehistory = async (req, res) => {
  try {
    const shortId = req.params.id;
    // console.log(shortId);
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          history: {
            timestamp: new Date().toUTCString(),
          },
        },
      }
    );
    if (!entry) return res.redirect("/");
    res.redirect(entry.redirectUrl);
  } catch (err) {
    console.log(err);
  }
};
const generateUrlShortId = async (req, res) => {
  try {
    const body = req.body;
    // console.log(req.body);
    if (!body.fullUrl) {
      return res.status(400).json({
        status: "fail",
        message: "URL is Required",
      });
    }
    const url = await URL.create({
      redirectUrl: body.fullUrl,
      history: [],
    });
    res.status(200).json({
      status: "success",
      url: body.fullUrl,
      id: url.shortId,
      clicks: url.history.length,
      data: { data: url.history },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      error: err,
    });
  }
};

module.exports = {
  generateUrlShortId,
  updatehistory,
  getAllid,
};
