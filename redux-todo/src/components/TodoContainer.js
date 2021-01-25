


import React from 'react'
import { connect } from 'react-redux'
import TodoCard from './TodoCard'

class TodoContainer extends React.Component {

 render(){
   return (
   <div>
     {
       this.props.todos.map(todoObj => {
         return <TodoCard {...todoObj} key={todoObj.id} />
       })
     }
   </div>
   )
 }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(TodoContainer)
