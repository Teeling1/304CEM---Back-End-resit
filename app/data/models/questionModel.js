const db = require('../database');

exports.listAllQuestions = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }
    // execute sql query
    const sql = 'SELECT * FROM Question;';
    data.query(sql, (err, result) => {
      callback(err, result);
    });
  });
};

exports.addQuestion = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }

    // execute create quiz sql query
    data.query(`INSERT INTO Question (question, question_desc, quiz_id) VALUES ("${req.body.question}", "${req.body.description}", (SELECT id from Quiz WHERE id = ${req.params.id}))`, (err, result) => {
      callback(err, result);
    });
  });
};

exports.delQuestion = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }
    const sql = `DELETE FROM Question where id = ${req.params.id};`;
    data.query(sql, (err, result) => {
      callback(err, result);
    })
  })
};

exports.listQuizQuestions = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }
    // execute sql query
    const sql = `SELECT * FROM Question where quiz_id = ${req.params.id};`;
    data.query(sql, (err, result) => {
      callback(err, result);
    });
  });
};
