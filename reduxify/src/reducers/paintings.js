

const initialState = [
  {
    id: 1,
    title: 'Portrait of a Carthusian',
    image:
      'https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg',
    slug: 'petrus-christus-portrait-of-a-carthusian',
    date: '1446',
    dimensions: {
      width: 8.5,
      height: 11.5
    },
    votes: 24,
    artist: {
      id: 1,
      name: 'Petrus Christus',
      hometown: 'Baarle-Hertog, Belgium',
      birthday: '1410',
      deathday: '1475'
    },
    museum: {
      id: 1,
      name: 'Unknown Museum'
    }
  }
]



export default function paintings(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PAINTINGS_SUCCESS':
      return action.paintings
    default:
      return state
  }
}

