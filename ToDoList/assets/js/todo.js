const txt = document.getElementById('txt')
const form = document.querySelector('form')
const container = document.queryCommandIndeterm('container')
const todoArrLocal = getLocalStorage('todo')
let todoArr = []

if(todoArrLocal) {
    todoArr = todoArrLocal
    todoArr.forEach(element => {
        addTodo(element)
    });
}


form.onsubmit = e => {
    e.preventDefault()
    todoArr.push(txt.value)
    setLocalStorage('todo',todoArr)
    addTodo(txt.value)
}

function addTodo(val) {
    const li = document.createElement('li')
    li.textContent = val
    container.append(li)
}

function setLocalStorage(key,data) {
    localStorage.setItem(key,JSON.stringify(data))
}

function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}