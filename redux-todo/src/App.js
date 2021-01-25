
import React from 'react'
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import TodoContainer from './components/TodoContainer'
import Form from './components/Form'
import { fetchTodosStart, fetchTodosSuccess } from './actions/todos'

class App extends React.Component {
  componentDidMount(){


    // dispatch an action that turns on the loader
    

    this.props.fetchTodosStart()

    fetch('http://localhost:3000/todos')
    .then(resp => resp.json())
    .then(todosArr => {
      setTimeout(() => {
        this.props.fetchTodosSuccess(todosArr)
      }, 1000)
    })

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Form />

          {
            this.props.loading ?
            <img src={logo} className="App-logo" alt="logo" /> : <TodoContainer />
          }
        </header>
      </div>
    );
  }  
}


const mapStateToProps = (state) => {
  return {
    loading: state.loading
  }
}

const mapDispatchToProps = {
  fetchTodosStart: fetchTodosStart,
  fetchTodosSuccess: fetchTodosSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(App)




