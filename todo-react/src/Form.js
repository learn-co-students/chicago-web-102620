

import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class TodoForm extends React.Component {
  constructor(){
    super()
    this.state = {
      task: 'foo'
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    //-----------------------
    const newTodo = {...this.state, completed: false}

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(newTodo)
    }
    //------------------------------


    fetch('http://localhost:3000/todos', reqObj)
    .then(resp => resp.json())
    .then(todo => {
      this.props.addTodo(todo)
    })

    
  }

  render(){
    const formStyle = { padding: '2%' }
    return (
      <Form inverted style={formStyle} onSubmit={this.handleSubmit}>
        <Form.Field inline>
          <input name='task' placeholder='new todo' value={this.state.task} onChange={this.handleChange}/>
          <Button type='submit'>Submit</Button>
        </Form.Field>
      </Form>
    )
  }
}

export default TodoForm
