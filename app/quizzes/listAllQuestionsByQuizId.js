const questionModel = require('../data/models/questionModel');
const config = require('../data/sqlConfig');

exports.listQuestionsForQuiz = (req, res) => {
  if (!req.params.id) {
    res.status(400);
    res.end(JSON.stringify('must supply quiz id'));
  }
  questionModel.listQuizQuestions(config.sqlConfig, req, (err, data) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(200);
    res.end(JSON.stringify(data));

  })
};
