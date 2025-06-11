const todoList = []

function removeTodo (div) {
  div.remove()
}

function addTodo () {
  const todoInput = document.getElementById('todo-input')
  todoList.push(todoInput.value)

  const div = document.createElement('div')
  div.innerHTML = todoInput.value
  div.style.display = 'flex'
  div.style.gap = '16px'
  div.style.alignItems = 'center'

  const btn = document.createElement('button')
  btn.innerHTML = 'x'
  btn.addEventListener('click', () => removeTodo(div))

  div.appendChild(btn)

  todoInput.value = ''

  document.getElementById('todo-list').appendChild(div)
}
