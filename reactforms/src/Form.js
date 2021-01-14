


import React from 'react'

class Form extends React.Component {

  constructor(){
    super()
    this.state = {
      task: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {...this.state, completed: false, id: 4}

    this.props.addTodo(newTodo)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.task} onChange={this.handleChange} />
        <input type='submit' />
      </form>
    )
  }
}

export default Form
