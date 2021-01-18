

import React from 'react'
import TodoCard from './Card'

class TodosContainer extends React.Component {

  renderTodos = () => {
    return this.props.todos.map(todoObj => {
      return <TodoCard key={todoObj.id} {...todoObj} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo} /> 
    })
  }

  render(){
    return (
      <div>
      {
        this.renderTodos()
      }
      </div>
    )
  }
}

export default TodosContainer


