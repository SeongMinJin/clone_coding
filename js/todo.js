const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");



let toDos = [];

const TODOS_KEY = "toDos"

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}



function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 자료의 타입을 생각해본다.
  saveToDos();
  li.remove();

}

function paintToDoList(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "❌";
  li.id = newToDo.id;
  span.innerText = newToDo.text;

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);

  button.addEventListener("click", deleteToDo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  
  const newToDoObj = {
    id : Date.now(),
    text : newToDo
  };

  toDos.push(newToDoObj);

  paintToDoList(newToDoObj);
  saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(element => {
    paintToDoList(element);
  });
  toDos = parsedToDos;
}


toDoForm.addEventListener("submit", handleTodoSubmit);