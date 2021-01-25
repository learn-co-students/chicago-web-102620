


const todos = (state=[], action) => {
  switch(action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return action.todos
    case 'CREATE_TODO_SUCCESS':
      return [...state, action.todo]
    default:
      return state
  }
}


export default todos
