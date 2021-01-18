
import logo from './logo.svg';
import './App.css';
import React from 'react'
import TodosContainer from './TodosContainer'
import Form from './Form'
import 'semantic-ui-css/semantic.min.css' 

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/todos')
    .then(resp => resp.json())
    .then(todosArr => {
      this.setState({
        todos: todosArr
      })
    })
  }

  deleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter(todoObj => todoObj.id !== id )

    this.setState({
      todos: updatedTodos
    })
  }

  addTodo = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  updateTodo = (id) => {
    const updatedTodos = this.state.todos.map(todoObj => {
      if (todoObj.id === id) {
        return {
          ...todoObj,
          completed: true
        }
      } else {
        return todoObj
      }
    })


    this.setState({
      todos: updatedTodos
    })

    console.log(id, '--ypdate----');
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
        <Form addTodo={this.addTodo} />
        <TodosContainer todos={this.state.todos} deleteTodo={this.deleteTodo} updateTodo={this.updateTodo} />
        </header>
      </div>
    )
  }
}

export default App;
