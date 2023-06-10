const form = document.querySelector('form')
const input = document.querySelector('input')

const addTodo = (e) => {

    e.preventDefault()

    const inputValue = input.value;

    let tasks;

    if (localStorage.getItem('Todos') === null) {
        tasks = []
    }
    else {
        tasks = JSON.parse(localStorage.getItem('Todos'))
    }

    tasks.push(inputValue)

    localStorage.setItem('Todos', JSON.stringify(tasks))
    input.value = ''

    getTodos()
}

form.addEventListener('submit', addTodo)

// JSON.STRINGFY
// JSON.PARSE

function getTodos() {

    const todos = JSON.parse(localStorage.getItem('Todos'))

    document.querySelector('ol').innerHTML = ''

    todos.map((todo, index) => {
        return document.querySelector('ol').innerHTML += `
          <li> ${todo}  <button onclick='deleteTodo(${index})'> 
          <i class="fa-solid fa-trash"></i>
          </button>
          </li>
        `
    })

}

getTodos()

function deleteTodo(e) {

    const todos = JSON.parse(localStorage.getItem('Todos'))

    let filteredArray = todos.filter((item, index) => {
        return index !== e
    })

    localStorage.setItem('Todos', JSON.stringify(filteredArray))

    getTodos()
}