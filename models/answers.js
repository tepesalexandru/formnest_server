const mongoose = require("mongoose");

const AnswersSchema = mongoose.Schema({
    formId: {
        type: String,
        required: true
    },
    answers: {
        type: []
    }
});

module.exports = mongoose.model("Answers", AnswersSchema);