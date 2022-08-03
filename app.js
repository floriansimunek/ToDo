const list = document.querySelector("#list");
const todo = document.querySelector("#todo");
const add = document.querySelector("#add");

function addTodo(todo) {
  let li = "<li>" + todo.value + "</li>";
  list.innerHTML += li;
  todo.value = "";
}

add.addEventListener("click", (e) => {
  e.preventDefault();
  addTodo(todo);
});
