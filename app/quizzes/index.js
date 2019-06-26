const express = require('express');

const listAllQuizzes = require('./listQuizzes');
const createQuizTbl = require('./createQuizTable');
const createNewQuiz = require('./createQuiz');
const deleteById = require('./deleteQuizById');

const createNewQuestionInQuiz = require('./createQuestion');
const listAllQuizQuestions = require('./listAllQuestionsByQuizId');

const router = express.Router();

const routes = () => {
  router.post('/create-quiz-table', createQuizTbl.createQuizTable);
  router.get('/', listAllQuizzes.listQuizzes);
  router.post('/', createNewQuiz.createQuiz);
  router.delete('/:id', deleteById.deleteQuiz);

  // question within quiz
  router.post('/:id/questions', createNewQuestionInQuiz.createQuestion);
  router.get('/:id/questions', listAllQuizQuestions.listQuestionsForQuiz);

  return router;
};

module.exports = routes;
