import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import Filter from "./Filter";
import hogsArr from "../porkers_data";

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogsArr,
      showGreased: false,
      sortBy: ''
    }
  }

  toggleGreased = () => {
    this.setState({
      showGreased: !this.state.showGreased
    })
  }


  updateSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  findHogs = () => {
    let updatedHogs = this.state.hogs;

    if (this.state.showGreased) {
      updatedHogs = this.state.hogs.filter( hogObj => hogObj.greased)
    } 

    if (this.state.sortBy === 'weight') {
      updatedHogs = updatedHogs.sort(function (hogA, hogB) {
        return hogA.weight - hogB.weight;
      });

    } else if (this.state.sortBy === 'name') {

      updatedHogs = updatedHogs.sort(function(hogA, hogB) {
        var nameA = hogA.name.toUpperCase(); 
        var nameB = hogB.name.toUpperCase(); 

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });



    }


    return updatedHogs
  }

  render() {
    const hogsToShow = this.findHogs()
    
    return (
      <div className="App">
        <Filter toggleGreased={this.toggleGreased} updateSort={this.updateSort} />
        <HogContainer hogs={hogsToShow} />
      </div>
    );
  }
}

export default App;
