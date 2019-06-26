const questionModel = require('../data/models/questionModel');
const config = require('../data/sqlConfig');

exports.listQuestions = (req, res) => {
  questionModel.listAllQuestions(config.sqlConfig, req, (err, data) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(200);
    res.end(JSON.stringify(data));

  })
};
