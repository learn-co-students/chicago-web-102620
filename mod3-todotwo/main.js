


// 1. render all the todos in our BE
// 2. Add new todos
// 4. mark todos as completed
// 3. delete todos



function main(){
  fetchTodos()
  createFormListener()
  createTodoListener()
}



function createTodoListener(){
  const todoContainer = document.querySelector('#todo-list')
  todoContainer.addEventListener('click', function(event){
    if (event.target.className === 'complete-btn') {
      updateComplete(event)
    } else if (event.target.className === 'delete-btn'){
      deleteTodo(event)
    }
  })
}

function deleteTodo(event){
  const todoId = event.target.dataset.id

  fetch(`http://localhost:3000/todos/${todoId}`, { method: 'DELETE' })
  .then(resp => resp.json())
  .then(data => {
    event.target.parentNode.remove()
  })

  // grab the id from the dataset
  // make a fetch req (DELETE)
  // then:
  //  remove the pTag from the FE 

}


function updateComplete(event){
  const todoId = event.target.dataset.id

  const reqObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      completed: true
    })
  }

  fetch(`http://localhost:3000/todos/${todoId}`, reqObj)
  .then(resp => resp.json())
  .then(updatedTodo => {
    event.target.parentNode.className = 'completed'
  })
}





  // X binda click event to the div holding all of the todos
  //  X once clicked:
  //    X confirm that it was the btn that got clicked 
  //     make a fetchreq (PATCH) to the backend with the updated info
  //     add a className of completed (updating the FRONTEND)

function createFormListener(){
  const form = document.querySelector('#todo-form')

  form.addEventListener('submit', function(event){
    event.preventDefault()

    const newTodo = {
      title: event.target['title'].value,
      completed: false
    }



    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    }

    fetch('http://localhost:3000/todos', reqObj)
    .then(resp => resp.json())
    .then(todo => {
      event.target.reset()
      renderTodo(todo)
    })
  })

  // grab the form
  // bind it to an eventlistener (submit):
  // once submitted:
  //   preventdefault
  //   grab the values from the form 
  //   send a fetch req (post)
  //   then:
  //      add a new ptag to the front end
}



function renderTodo(todo) {
    const todoContainer = document.querySelector('#todo-list')
    const pTag = document.createElement('p')
    pTag.innerText = todo.title

    if (todo.completed) {
      pTag.className = 'completed'
    }


    const completeBtn = document.createElement('button')
    completeBtn.dataset.id = todo.id
    completeBtn.innerText = 'mark as complete'
    completeBtn.className = 'complete-btn'

    const deleteBtn = document.createElement('button')
    deleteBtn.dataset.id = todo.id
    deleteBtn.innerText = 'X'
    deleteBtn.className = 'delete-btn'


    pTag.append(completeBtn, deleteBtn)

    todoContainer.append(pTag)
}






function fetchTodos(){
  fetch('http://localhost:3000/todos')
  .then(resp => resp.json())
  .then(todos => {
    todos.forEach(function(todo){
      renderTodo(todo)
    })
  })
}



main()













//fetchTodos psuedocode:
// make a fetch req to our BE
// when it comes back:
//   convert to JSON
//   iterate over each of the todos
//      for each todo, create a dom element and append to the DOM



