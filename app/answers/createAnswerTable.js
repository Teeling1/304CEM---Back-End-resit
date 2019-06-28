const config = require('./../data/sqlConfig');
const db = require('./../data/database');

exports.createAnswerTable = (req, res) => {
  db.createAnswerTable(config.sqlConfig, (err, state) => {
    if (err) {
      res.status(400);
      res.end('Error' + err);
    }
    res.status(200);
    res.end('Successfully created Answer Table');
  })
};
'This function creates the answers for each question'
