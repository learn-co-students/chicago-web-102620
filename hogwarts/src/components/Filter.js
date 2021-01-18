

import React from 'react'

class Filter extends React.Component {

 render(){
   const styles = {
     border: '2px solid black',
     padding: '5%',
     width: '80%',
     margin: 'auto'
   }

   return (
   <div style={styles}>
     <input type='checkbox' onChange={this.props.toggleGreased} /> Show Greased Only
     <select onChange={this.props.updateSort}>
       <option value=''></option>
       <option value='weight'>weight</option>
       <option value='name'>name</option>
     </select>
   </div>
   )
 }
}

export default Filter
