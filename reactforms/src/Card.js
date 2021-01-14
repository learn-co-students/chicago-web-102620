

import React from 'react'

class Card extends React.Component {


 render(){
   const { id, task } = this.props.todo

   return (
   <div>
     <h4>{task}<button onClick={ () => this.props.deleteSingleTodo(id) }>delete</button></h4>
   </div>
   )
 }
}

export default Card



   // option 2:
 // handleClick = () => {
   // this.props.deleteSingleTodo(this.props.todo.id)
 // }


   // <h4>{task}<button onClick={this.handleClick}>delete</button></h4>
