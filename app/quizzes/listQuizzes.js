const quizModel = require('../data/models/quizModel');
const config = require('../data/sqlConfig');

exports.listQuizzes = (req, res) => {
  quizModel.listAllQuizzes(config.sqlConfig, req, (err, data) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(200);
    res.end(JSON.stringify(data));

  })
};
