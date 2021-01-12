
import logo from './logo.svg';
import './App.css';
import React from 'react'
import TodoContainer from './TodoContainer'

const todos = [
  { id: 1, task: 'clean room', completed: false },
  { id: 2, task: 'wash dishes', completed: false }, 
  { id: 3, task: 'buy groceries', completed: true }
]


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todos
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <TodoContainer x={'y'} todos={this.state.todos} />
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
