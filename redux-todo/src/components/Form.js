

import { createTodoSuccess } from '../actions/todos'

import React from 'react'
import { connect } from 'react-redux'

class Form  extends React.Component {
  state = {
    task: ''
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({...this.state, completed: false })
    }

    fetch('http://localhost:3000/todos', reqObj)
    .then(resp => resp.json())
    .then(newTodo => {
      this.setState({
        task: ''
      })

      this.props.createTodoSuccess(newTodo)

    })
    
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='input'  name='task' onChange={this.handleChange} value={this.state.task} />
          <input type='submit'  />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  createTodoSuccess: createTodoSuccess
}

export default connect(null, mapDispatchToProps)(Form)















