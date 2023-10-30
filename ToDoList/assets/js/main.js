const addTodo = document.querySelector(".add");
const todoInput = document.getElementById("todoInput");
const todoItems = document.querySelector(".todo-items");
const todoArrLocal = getLocalStorage('data')
let data = []

if(todoArrLocal) {
data = todoArrLocal
data.forEach(element => {
  createTodo(element)
});
}


 function createElem(elem,content,classnames) {
   const element = document.createElement(elem)
   element.textContent = content
   element.classList.add(classnames)
   return element
 }

 function createTodo(text) {
  const todoItemCreate = createElem('li','','todo-item')
  const todoParCreate = createElem('p',text,'sa')
  const todoIconBoxCreate = createElem('div','','icons')
  const todoCheckCreate = createElem('input','','icons')

  todoCheckCreate.setAttribute("type", "checkbox");

  todoIconBoxCreate.append(todoCheckCreate)
  todoItemCreate.append(todoParCreate,todoIconBoxCreate)
  todoItems.append(todoItemCreate)


  todoCheckCreate.onchange = () => {
    todoItemCreate.classList.toggle("line");
  };
  
 }



 addTodo.addEventListener("click", (e) => {
  e.preventDefault()
  data.push(todoInput.value)
  setLocalStorage('data',data)
  createTodo(todoInput.value);
  todoInput.value = ''
});



function setLocalStorage(key,data) {
  localStorage.setItem(key,JSON.stringify(data))
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}