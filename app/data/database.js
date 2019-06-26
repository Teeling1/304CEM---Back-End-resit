const mysql = require('mysql');

exports.connect = (conData, callback) => {
  //create connection obj and extract db param
  const con = mysql.createConnection({
    host: conData.host,
    user: conData.user,
    password: conData.password,
    database: conData.database
  });
  con.connect(function(err) {
    if (err) {
      callback(err);
    }
    callback(null, con);
  });
};

exports.createQuizTable = (conConfig, callback) => {
  // create db connection
  const con = mysql.createConnection({
    host: conConfig.host,
    user: conConfig.user,
    password: conConfig.password,
    database: conConfig.database
  });
  const sql = "CREATE TABLE IF NOT EXISTS Quiz (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255), description VARCHAR(255), type VARCHAR(255), createdAt timestamp NOT NULL default current_timestamp)";
  con.query(sql, (err, result) => {
    callback(err, result);
  });
  con.end();
};

exports.createQuestionTable = (conConfig, callback) => {
  // create db connection
  const con = mysql.createConnection({
    host: conConfig.host,
    user: conConfig.user,
    password: conConfig.password,
    database: conConfig.database
  });
  const sql = "CREATE TABLE IF NOT EXISTS Question (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, quiz_id INT NOT NULL, question VARCHAR(255), question_desc VARCHAR(255), createdAt timestamp NOT NULL default current_timestamp, FOREIGN KEY(quiz_id) REFERENCES Quiz(id))";
  con.query(sql, (err, result) => {
    callback(err, result);
  });
  con.end();
};

exports.createAnswerTable = (conConfig, callback) => {
  // create db connection
  const con = mysql.createConnection({
    host: conConfig.host,
    user: conConfig.user,
    password: conConfig.password,
    database: conConfig.database
  });
  const sql = "CREATE TABLE IF NOT EXISTS Answer (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, question_id INT NOT NULL, answer VARCHAR(255), createdAt timestamp NOT NULL default current_timestamp, FOREIGN KEY(question_id) REFERENCES Question(id))";
  con.query(sql, (err, result) => {
    callback(err, result);
  });
  con.end();
};


