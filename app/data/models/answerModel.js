const db = require('../database');

exports.listAllAnswers = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }
    // execute sql query
    const sql = 'SELECT * FROM Answer;';
    data.query(sql, (err, result) => {
      callback(err, result);
    });
  });
};

exports.delAnswer = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }
    const sql = `DELETE FROM Answer where id = ${req.params.id};`;
    data.query(sql, (err, result) => {
      callback(err, result);
    })
  })
};

exports.addAnswer = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }

    // execute create answer sql query
    data.query(`INSERT INTO Answer (answer, question_id) VALUES ("${req.body.answer}", (SELECT id from Question WHERE id = ${req.params.id}))`, (err, result) => {
      callback(err, result);
    });
  });
};

exports.listAnswersForQuestion = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }
    // execute sql query
    const sql = `SELECT * FROM Answer where question_id = ${req.params.id};`;
    data.query(sql, (err, result) => {
      callback(err, result);
    });
  });
};
