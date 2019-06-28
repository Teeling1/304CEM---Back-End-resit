const answerModel = require('../data/models/answerModel');
const config = require('../data/sqlConfig');

exports.deleteAnswer = (req, res) => {

  if (!req.params.id) {
    res.status(400);
    res.end('Must specify an id to delete');
  }
  answerModel.delAnswer(config.sqlConfig, req, (err) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(202);
    res.end(JSON.stringify(`Successfully deleted Answer with id: ${req.params.id}`));

  })
};
'Function created to unsure that the answer table can be updated when the user wants to delete an answer'
