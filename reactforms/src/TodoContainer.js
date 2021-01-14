
import React, { Component } from 'react'
import Card from './Card'

class TodoContainer extends Component {
  renderTodos = () => {
    return this.props.todos.map(todoObj => {
      return <Card key={todoObj.id} todo={todoObj} deleteSingleTodo={this.props.deleteSingleTodo} />
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
