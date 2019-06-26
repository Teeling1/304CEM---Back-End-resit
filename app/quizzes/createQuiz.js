const quizModel = require('../data/models/quizModel');
const config = require('../data/sqlConfig');

exports.createQuiz = (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.type) {
    res.status(400);
    res.end(JSON.stringify('missing required fields'));
  }
  quizModel.addQuiz(config.sqlConfig, req, (err, data) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(201);
    res.end(JSON.stringify(data))
  })
};
