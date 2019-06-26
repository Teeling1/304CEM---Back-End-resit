const answerModel = require('../data/models/answerModel');
const config = require('../data/sqlConfig');

exports.listAnswersForQuestion = (req, res) => {
  if (!req.params.id) {
    res.status(400);
    res.end(JSON.stringify('must supply quiz id'));
  }
  answerModel.listAnswersForQuestion(config.sqlConfig, req, (err, data) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(200);
    res.end(JSON.stringify(data));

  })
};
