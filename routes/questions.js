const express = require("express");
const router = express.Router();

const questionsController = require("../controllers/question");

router.get("/:formId", questionsController.byId);
router.post("/:formId", questionsController.create);
router.delete("/:formId/:questionId", questionsController.delete);
router.patch("/:formId", questionsController.update);


module.exports = router;