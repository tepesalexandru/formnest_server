const express = require("express");
const router = express.Router();

const formController = require("../controllers/forms");

router.get("/:formId", formController.byId);
router.get("/", formController.all);
router.post("/", formController.create);
router.patch("/:formId", formController.update);
router.delete("/:formId", formController.delete);


module.exports = router;