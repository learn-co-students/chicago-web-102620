

import React from 'react'

class HogTile extends React.Component {

  constructor(){
    super()
    this.state = {
      showDetails: false
    }
  }

  renderDetails = () => {
    const { weight, specialty, ['highest medal achieved']: medal } = this.props.hog

    return (
      <div>
      <p>weight: {weight}</p>
      <p>specialty: {specialty}</p>
      <p>medal: {medal}</p>
      </div>
    )
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  findImage = () => {
    const { name } = this.props.hog

    const image_name = name.toLowerCase().split(' ').join('_')
    const image = require(`../hog-imgs/${image_name}.jpg`) 

    return image
  }

  render(){
    const { name } = this.props.hog

    const image = this.findImage()



    return (
      <div className='ui eight wide column'>
      <h6>{name}</h6>
      <img src={this.findImage()} height={'300px'} width={'300px'} onClick={this.toggleDetails}/>

      {this.state.showDetails ? this.renderDetails() : null}
      </div>
    )
  }
}

export default HogTile
