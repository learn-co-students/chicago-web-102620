
import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './Card.css'

class TodoCard extends React.Component {

  handleRemove = () => {
    fetch(`http://localhost:3000/todos/${this.props.id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      this.props.deleteTodo(this.props.id)
    })
  }

  handleUpdate= () => {
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({ completed: true })
    }


    fetch(`http://localhost:3000/todos/${this.props.id}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      this.props.updateTodo(this.props.id)
    })
  }

 fetch('http://localhost:3000')
 .then(resp => resp.json())
 .then(data => {
   console.log('data', data)
 })

 render(){
   return (
     <Card>
      <Card.Content>
        <Card.Description className={this.props.completed ? 'task' : ''}>
          {this.props.task}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={this.handleUpdate}>
            Mark As Complete
          </Button>
          <Button basic color='red' onClick={this.handleRemove}>
            Remove
          </Button>
        </div>
      </Card.Content>
    </Card>
   )
 }
}

export default TodoCard
