const express = require('express');

const createAnswerTbl = require('./createAnswerTable');
const listAllAnswers = require('./listAnswers');
const deleteById = require('./deleteAnswerById');

const router = express.Router();

const routes = () => {
  router.post('/create-answer-table', createAnswerTbl.createAnswerTable);
  router.get('/', listAllAnswers.listAnswers);
  router.delete('/:id', deleteById.deleteAnswer);


  return router;
};

module.exports = routes;
'Created to allow the index of the quiz to be seen by the user'
