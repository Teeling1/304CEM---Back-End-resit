const config = require('./../data/sqlConfig');
const db = require('./../data/database');

exports.createQuizTable = (req, res) => {
  db.createQuizTable(config.sqlConfig, (err, state) => {
    if (err) {
      res.status(400);
      res.end('Error' + err);
    }
    res.status(200);
    res.end('Successfully created Quiz Table');
  })
};
