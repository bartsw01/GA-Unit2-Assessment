var express = require('express');
var router = express.Router();
const Todo = require('../data/todos');
const todosCtrl = require('../controllers/todos');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    todos: Todo.getAll(),
    
   });
});

// router.post('/', function(req, res, next){
//   res.render('index',  {
//     todos: Todo.getAll(),
//     title: 'To Do List',

//   })
// })


router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);
// router.get('/', todosCtrl.getAll);

// router.get('/', todosCtrl.newTodo);
// router.get('/:id', todosCtrl.show);

router.delete('/:id', todosCtrl.deleteTodo);
// router.get('/:id/edit', todosCtrl.edit);
// router.put('/:id', todosCtrl.update);



module.exports = router;
