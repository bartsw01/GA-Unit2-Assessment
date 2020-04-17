const todos = [
    // {skill: 'HTML', done: true},
    // {skill: 'Learn Express', done: false},
    // {skill: 'CSS Ninja', done: false},
    // {skill: 'JavaScript', done: true}
  ];
  
 
  
  const getAll = () => {
    return todos;
  }

  const getOne = (id) => {
    return todos[id];
  }

  const create = (todo) => {
    todos.push(skill);
  }

  const deleteOne = (id) => {
    todos.splice(id, 1);
  }

  const update = (id, skill) => {
    todos.splice(id, 1, skill);
  }



  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };