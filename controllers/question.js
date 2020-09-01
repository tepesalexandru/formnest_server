const Questions = require("../models/questions");

const questionController = {
    async byId (req, res) {
        const questions = await Questions.findOne({
            formId: req.params.formId
        });
        res.json(questions);
    },
    async create (req, res) {
        await Questions.updateOne({
            formId: req.params.formId,
        }, {$push: {
                questions: {
                    "id": req.body.id,
                    "title": req.body.title,
                    "type": req.body.type,
                    "position": req.body.position
                }
            }
        });
        res.json("Question created!");
    },
    async update (req, res) {
        await Questions.updateOne({
            formId: req.params.formId,
        }, {
            $set: {
                questions: req.body.questions
            }
        });
        res.json("Question updated");
    },
    async delete (req, res) {
        await Questions.updateOne({
            formId: req.params.formId,
            $pull: {
                questions: {
                    id: req.body.id
                }
            }
        });
        res.json("Question deleted!");
    }
}

module.exports = questionController;