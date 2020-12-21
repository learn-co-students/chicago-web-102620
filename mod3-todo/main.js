


// 1. render all the todos in our BE
// 2. Add new todos
// 4. mark todos as completed
// 3. delete todos



function main(){
  fetchTodos()
  createFormListener()
  createCompletionListener()
}



function createCompletionListener(){
  const todoContainer = document.querySelector('#todo-list')

  todoContainer.addEventListener('click', function(event){
    if (event.target.className === 'complete-btn') {
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
      const todoContainer = document.querySelector('#todo-list')

      const pTag = document.createElement('p')
      pTag.innerText = todo.title



      todoContainer.append(pTag)
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










function fetchTodos(){
  fetch('http://localhost:3000/todos')
  .then(resp => resp.json())
  .then(todos => {
    todos.forEach(function(todo){
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

      pTag.append(completeBtn)



      todoContainer.append(pTag)
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



