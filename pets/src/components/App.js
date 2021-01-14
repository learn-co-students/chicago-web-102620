import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
    console.log(this.state, '------');
  }

  onFindPetsClick = () => {
    const { type } = this.state.filters

    const url = (type === 'all') ? '/api/pets' : `/api/pets?type=${type}`


    fetch(url)
    .then(resp => resp.json())
    .then(petsArr => {
      this.setState({
        pets: petsArr
      })
    })
  }

  onAdoptPet = (id) => {
    console.log('adopt------');

    const updatedPets = this.state.pets.map(petObj => {
      if (petObj.id === id){
        return {
          ...petObj,
          isAdopted: true
        }
      } else {
        return petObj
      }
    })


    this.setState({
      pets:  updatedPets
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App









































