const express = require('express');

const createQuestionTbl = require('./createQuestionTable');
const listAllQuestions = require('./listQuestions');
const deleteById = require('./deleteQuestionById');

const createNewAnswerInQuestion = require('./createAnswer');
const listAnswers = require('./listAnswersByQuestionId');

const router = express.Router();

const routes = () => {
  router.post('/create-question-table', createQuestionTbl.createQuestionTable);
  router.get('/', listAllQuestions.listQuestions);
  router.delete('/:id', deleteById.deleteQuestion);

  // create answer
  router.post('/:id/answers', createNewAnswerInQuestion.createAnswer);

  // get answer for question
  router.get('/:id/answers', listAnswers.listAnswersForQuestion);
  return router;
};

module.exports = routes;
