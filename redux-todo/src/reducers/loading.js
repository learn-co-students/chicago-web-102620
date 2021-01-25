



const loading = (state=false, action) => {
  switch(action.type) {
    case 'FETCH_TODOS_START':
      return true
    case 'FETCH_TODOS_SUCCESS':
      return false
    default:
      return state
  }
}


export default loading
