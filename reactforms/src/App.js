
import logo from './logo.svg';
import './App.css';
import React from 'react'

import TodoContainer from './TodoContainer'
import Form from './Form'


const todosArr = [
  { id: 1, task: 'clean room', completed: false },
  { id: 2, task: 'wash dishes', completed: false }, 
  { id: 3, task: 'buy groceries', completed: true }
]


class App extends React.Component {
  constructor(){
    super()

    this.state = {
      todos: todosArr
    }
  }

  deleteSingleTodo = (id) => {
    const updatedTodos = this.state.todos.filter(todoObj => todoObj.id !== id)
    this.setState({
      todos: updatedTodos
    })
  }

  addTodo = (newTodo) => {
    console.log('--add Todo----', newTodo);
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Form addTodo={this.addTodo} />
          <TodoContainer todos={this.state.todos} deleteSingleTodo={this.deleteSingleTodo}/>
        </header>
      </div>
    )
  }
}

export default App;













// JSX
// - traditional HTML nodes
// - embedded js expressions
// - children Components










    // when setState is called:
    // 1. the value of the indicated keys get updated
    // 2. triggers the render method again
