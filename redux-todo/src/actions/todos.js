


export const fetchTodosStart = () => {
  return {
    type: 'FETCH_TODOS_START'
  }
}

export const fetchTodosSuccess = (todosArr) => {
  return {
    type: 'FETCH_TODOS_SUCCESS',
    todos: todosArr
  }
}




export const createTodoSuccess = (newTodo) => {
  return {
    type: 'CREATE_TODO_SUCCESS',
    todo: newTodo
  }
}
