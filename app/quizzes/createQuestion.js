const questionModel = require('../data/models/questionModel');
const config = require('../data/sqlConfig');

exports.createQuestion = (req, res) => {
  if (!req.body.question || !req.body.description || !req.params.id) {
    res.status(400);
    res.end(JSON.stringify('missing required fields'));
  }
  questionModel.addQuestion(config.sqlConfig, req, (err, data) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(201);
    res.end(JSON.stringify(data))
  })
};
