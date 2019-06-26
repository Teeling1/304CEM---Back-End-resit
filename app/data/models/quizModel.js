const db = require('../database');

exports.listAllQuizzes = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }
    // execute sql query
    const sql = 'SELECT * FROM Quiz;';
    data.query(sql, (err, result) => {
      callback(err, result);
    });
  });
};

exports.addQuiz = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }
    // object of quiz from body
    const quiz = {
      title: req.body.title,
      description: req.body.description,
      type: req.body.type
    };

    // execute create quiz sql query
    data.query('INSERT INTO Quiz SET ?', quiz, (err, result) => {
      callback(err, quiz);
    });
  });
};

exports.delQuiz = (conConfig, req, callback) => {
  // connect to db
  db.connect(conConfig, (err, data) => {
    if (err) {
      callback(err);
    }
    const sql = `DELETE FROM Quiz where id = ${req.params.id};`;
    data.query(sql, (err, result) => {
      callback(err, result);
    })
  })
};
