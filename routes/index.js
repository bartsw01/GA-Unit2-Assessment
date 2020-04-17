var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');


router.get('/', todosCtrl.index);
// router.get('/', todosCtrl.newTodo);
router.get('/:id', todosCtrl.show);
router.post('/', todosCtrl.create);
// router.delete('/:id', todosCtrl.deleteTodo);
router.get('/:id/edit', todosCtrl.edit);
router.put('/:id', todosCtrl.update);

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
