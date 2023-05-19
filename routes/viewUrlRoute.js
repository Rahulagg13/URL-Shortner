const router = require("express").Router();
const viewController = require("../controller/viewController");
const urlController = require("../controller/urlController");
router.route("/").get(viewController.getAllidOverview);

router
  .route("/:id")
  .get(urlController.updatehistory, viewController.getidOverview);
module.exports = router;
