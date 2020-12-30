var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const todoList = [
    { title: 'JavaScriptを勉強する', done: true },
    { title: 'Node.jsを勉強する', done: false },
    { title: 'Web APIを作る', done: false }
];
res.json(todoList);
});

module.exports = router;
