
import React from 'react'

import HogTile from './HogTile'

class HogContainer extends React.Component {
  renderHogs = () => {
    return this.props.hogs.map(hogObj => {
      return <HogTile key={hogObj.name} hog={hogObj} />
    })
  }

 render(){
   return (
   <div className='ui grid container'>
     {this.renderHogs()}
   </div>
   )
 }
}

export default HogContainer
