import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushis: [],
      startIndex: 0,
      budget: 50
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(resp => resp.json())
    .then(sushisArr => {

     const updatedSushis = sushisArr.map(sushiObj => {
       return {
         ...sushiObj,
         isEaten: false
       }
      })

      this.setState({
        sushis: updatedSushis
      })
    })
  }

  handleEaten = (id, price) => {
    if (price > this.state.budget) {
      alert('you are broke')
      return 
    }


    const updatedSushis = this.state.sushis.map(sushiObj => {
      if (sushiObj.id === id) {
        return {
          ...sushiObj,
          isEaten: true
        }
      } 

      return sushiObj
    })


    this.setState({
      sushis: updatedSushis,
      budget: (this.state.budget - price)
    })

  }

  handleMore = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  }


  render() {
    const { startIndex, budget, sushis } = this.state

    const slicedSushis = sushis.slice(startIndex, startIndex + 4)
    const eatenSushis = sushis.filter(sushiObj => sushiObj.isEaten)

    return (
      <div className="app">
        <SushiContainer 
          sushis={slicedSushis} 
          handleEaten={this.handleEaten}
          handleMore={this.handleMore} />

        <Table eatenSushis={eatenSushis} budget={budget} />
      </div>
    );
  }
}

export default App;
