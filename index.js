const todoList = [
  'AAA',
  'BBB',
  'CCC'
]

function removeTodo (todoValue = 'AAA', node) {
  const index = todoList.findIndex(td => td === todoValue)

  if (index >= 0) {
    todoList.splice(index, 1)
    node.remove()
  }

}

function addTodo () {
  const todoInput = document.getElementById('todo-input')
  const todo = todoInput.value

  if (!todo) {
    alert('กรุณากรอกข้อมูล')
    return
  }

  const isExisting = todoList.some(td => td === todo)

  if (!isExisting) {
    todoList.push(todo)

    const div = document.createElement('div')
    div.innerHTML = todo
    div.style.display = 'flex'
    div.style.gap = '16px'
    div.style.alignItems = 'center'

    const btn = document.createElement('button')
    btn.innerHTML = 'x'
    btn.addEventListener('click', () => removeTodo(todo, div))

    div.appendChild(btn)

    todoInput.value = ''

    document.getElementById('todo-list').appendChild(div)
  } else {
    alert('มี todo นี้แล้ว')
    todoInput.value = ''
  }
}
