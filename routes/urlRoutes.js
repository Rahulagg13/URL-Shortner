const router = require("express").Router();
const urlController = require("../controller/urlController");
router
  .route("/")
  .get(urlController.getAllid)
  .post(urlController.generateUrlShortId);
router.route("/:id").get(urlController.updatehistory);
module.exports = router;
