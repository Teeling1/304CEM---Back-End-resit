const questionModel = require('../data/models/questionModel');
const config = require('../data/sqlConfig');

exports.deleteQuestion = (req, res) => {

  if (!req.params.id) {
    res.status(400);
    res.end('Must specify an id to delete');
  }
  questionModel.delQuestion(config.sqlConfig, req, (err) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(202);
    res.end(JSON.stringify(`Successfully deleted Question with id: ${req.params.id}`));

  })
};
