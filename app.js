// todo list display
const list = document.querySelector("#list");
// todo input
const todo = document.querySelector("#todo");
// todo add button
const add = document.querySelector("#add");

/** addTodo
 * add todo item to the todolist
 * @param {HTMLElement} todo - todo input
 */
function addTodo(todo) {
  // check if input is not empty or null
  if (isInputEmpty(todo)) {
    alert("Empty Input !");
  } else {
    // create the li element + button "check" and "remove" - add it to the list
    let li = "<li>" + todo.value + '<input id="done" type="button" value="V"><input id="remove" type="button" value="X"></li>';
    list.innerHTML += li;
    // reset todo input value
    todo.value = "";
  }
}

/** isInputEmpty
 * return true if the user input is empty
 * @param {string} input.value
 */
function isInputEmpty(input) {
  return !input.value || input.value === "" || input.value === null;
}

// add todo item when add button is clicked
add.addEventListener("click", () => {
  addTodo(todo);
});
