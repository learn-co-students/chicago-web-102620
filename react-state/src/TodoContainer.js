
import React, { Component } from 'react'
import Card from './Card'

class TodoContainer extends Component {


  renderTodos = () => {
    return this.props.todos.map(todoObj => {
      return <Card task={todoObj.task} completed={todoObj.completed} />
    })
  }

  render(){
    return (
      <div>
        {this.renderTodos()}
      </div>
    )
  }
}

export default TodoContainer



// JSX
// html
// embedded js
// another card
