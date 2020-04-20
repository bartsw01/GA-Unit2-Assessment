const todos = [
  
];


const getAll = () => {
  return todos;
}

const getOne = (id) => {
  return todos[id];
}

const create = (todo) => {
  todos.push(todo);
}

const deleteOne = (id) => {
  todos.splice(id, 1);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};




 