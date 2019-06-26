const answerModel = require('../data/models/answerModel');
const config = require('../data/sqlConfig');

exports.listAnswers = (req, res) => {
  answerModel.listAllAnswers(config.sqlConfig, req, (err, data) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(200);
    res.end(JSON.stringify(data));

  })
};
