const quizzes = require('./app/quizzes');
const questions = require('./app/questions');
const answers = require('./app/answers');

const registerRoutes = (app) => {
  app.use('/quizzes', quizzes());
  app.use('/questions', questions());
  app.use('/answers', answers());
};

module.exports = registerRoutes;
