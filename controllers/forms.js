const Form = require("../models/form");
const Questions = require("../models/questions");
const Answers = require("../models/answers");

const formController = {
  async byId(req, res) {
    const form = await Form.find({
      formId: req.params.formId,
    });
    res.json(form);
  },
  async all(req, res) {
    const forms = await Form.find();
    res.json(forms);
  },
  async create(req, res) {
    const newForm = new Form(req.body);
    const newQuestions = new Questions({
      formId: req.body.formId,
    });
    const newAnswers = new Answers({
      formId: req.body.formId,
    });
    await newForm.save();
    await newQuestions.save();
    await newAnswers.save();
    res.json(newForm);
  },
  async update(req, res) {
    const updatedForm = await Form.updateOne(
      {
        formId: req.params.formId,
      },
      {
        $set: {
          title: req.body.title,
        },
      }
    );
    res.json(updatedForm);
  },
  async delete(req, res) {
    await Form.deleteOne({
      formId: req.params.formId,
    });
    res.json("Completed");
  },
};

module.exports = formController;
