
import React, { Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


class SushiContainer extends Component {

  renderSushis = () => {
    return this.props.sushis.map( sushiObj => {
      return <Sushi key={sushiObj.id} {...sushiObj} handleEaten={this.props.handleEaten} />
    })
  }

  render(){
    return (
      <div className="belt">
        {
          this.renderSushis()
        }
        <MoreButton handleMore={this.props.handleMore} />
      </div>
    )
  }
}

export default SushiContainer

