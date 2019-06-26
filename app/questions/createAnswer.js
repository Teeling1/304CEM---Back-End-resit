const answerModel = require('../data/models/answerModel');
const config = require('../data/sqlConfig');

exports.createAnswer = (req, res) => {
  if (!req.body.answer || !req.params.id) {
    res.status(400);
    res.end(JSON.stringify('missing required fields'));
  }
  answerModel.addAnswer(config.sqlConfig, req, (err, data) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(201);
    res.end(JSON.stringify(data))
  })
};
