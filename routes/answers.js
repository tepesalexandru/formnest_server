const express = require("express");
const router = express.Router();

const answerController = require("../controllers/answer");

router.get("/:formId", answerController.byId);
router.post("/:formId", answerController.create);

module.exports = router;