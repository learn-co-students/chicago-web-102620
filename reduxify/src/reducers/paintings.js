





export default function paintings(state = [], action) {
  let updatedPaintings;

  switch (action.type) {
    case 'FETCH_PAINTINGS_SUCCESS':
      return action.paintings
    case 'DELETE_PAINTING':
      updatedPaintings = state.filter(paintingObj => paintingObj.id !== action.id)
      return updatedPaintings
    case 'UPVOTE':
      updatedPaintings = state.map(paintingObj => {
        if (paintingObj.id === action.id) {
          return {
            ...paintingObj,
            votes: paintingObj.votes + 1
          }
        } else {
          return paintingObj
        }
      })

      return updatedPaintings
    default:
      return state
  }
}





















