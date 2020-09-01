const Answers = require("../models/answers");

const answerController = {
  async byId(req, res) {
    const answers = await Answers.findOne({
      formId: req.params.formId,
    });
    res.json(answers);
  },
  async create(req, res) {
    await Answers.updateOne(
      {
        formId: req.params.formId,
      },
      {
        $push: {
          answers: {...req.body.answers},
        },
      }
    );
    res.json("Answer added!");
  },
};

module.exports = answerController;
