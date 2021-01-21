


import React from 'react'

class Dashboard extends React.Component {

 render(){
   const { username } = this.props.match.params

   return (
   <div>
     <h4>Hello {username}</h4>
   </div>
   )
 }
}

export default Dashboard
