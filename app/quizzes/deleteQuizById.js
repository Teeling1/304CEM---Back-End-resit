const quizModel = require('../data/models/quizModel');
const config = require('../data/sqlConfig');

exports.deleteQuiz = (req, res) => {

  if (!req.params.id) {
    res.status(400);
    res.end('Must specify an id to delete');
  }
  quizModel.delQuiz(config.sqlConfig, req, (err) => {
    if (err) {
      res.status(400);
      res.end(JSON.stringify(err));
    }
    res.status(202);
    res.end(JSON.stringify('Successfully deleted Quiz'));

  })
};
