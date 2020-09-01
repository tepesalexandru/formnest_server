const mongoose = require("mongoose");

const QuestionsSchema = mongoose.Schema({
    formId: {
        type: String,
        required: true
    },
    questions: {
        type: []
    }
});

module.exports = mongoose.model("Questions", QuestionsSchema);