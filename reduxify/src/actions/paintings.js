//
//
//
// action - is an object with, at a minimum, a type key. It often also has a payload.
//
//
// actionCreator - is a function that produces (returns) an action


export const fetchPaintingsSuccess = (paintings) => {
  return {
    type: 'FETCH_PAINTINGS_SUCCESS',
    paintings: paintings
  }
}



export const upVote = (id) => {
  return {
    type: 'UPVOTE',
    id: id
  }
}

export const deletePainting = (id) => {
  return {
    type: 'DELETE_PAINTING',
    id: id
  }
}
