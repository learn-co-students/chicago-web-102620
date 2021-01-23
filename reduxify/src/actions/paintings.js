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
