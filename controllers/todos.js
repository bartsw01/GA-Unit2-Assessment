const Todo = require('../models/todo');


  const index = (req, res, next) => {
    res.render('todos/index', {
      todos: Todo.getAll(),
      time: req.time
      
    });
  }

  const show = (req, res) => {
    res.render('todos/show', {
      todo: Todo.getOne(req.params.id),
      // skillNum: parseInt(req.params.id) + 1
    });
  }

  const newSkill = (req, res) => {
    res.render('todos/new');
  }



  const create = (req, res) => {
    console.log(req.body);
    req.body.done = false;
    Todo.create(req.body);
    res.redirect('/todos');
  }

  const deleteSkill = (req, res) => {
    Todo.deleteOne(req.params.id);
    res.redirect('/todos');
  }

  const update = (req, res) => {
    req.body.done = req.body.done === 'on';
    Todo.update(req.params.id, req.body);
    res.redirect('/todos');
  }

  const edit = (req, res) => {
    res.render('todos/edit', {
      todo: Todo.getOne(req.params.id),
      idx: req.params.id
    });
  }

  

  module.exports = {
    index,
    show,
    newSkill,
    create,
    deleteSkill,
    update,
    edit
  };