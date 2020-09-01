const mongoose = require("mongoose");

const FormSchema = mongoose.Schema({
    formId: {
        type: String,
        required: true
    },
    title: {
        type: String,
    }
});

module.exports = mongoose.model('Forms', FormSchema);