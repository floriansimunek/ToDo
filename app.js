// todo list display
const list = document.querySelector("#list");
// done todo list display
const doneList = document.querySelector("#done-list");
// todo input
const input = document.querySelector("#input");
// todo add button
const add = document.querySelector("#add");

/** addTodo
 * add todo item to the todolist
 * @param {HTMLElement} input - todo input
 */
function addTodo(input) {
  // check if input is not empty or null
  if (isInputEmpty(input)) {
    alert("Empty Input !");
  } else {
    // create the li element + button "check" and "remove" - add it to the list
    let li = document.createElement("li");
    li.innerHTML = "<p>" + input.value + '</p><input id="done" type="button" value="V"><input id="remove" type="button" value="X">';
    list.appendChild(li);
    // display title if the list contain 1 or more todo item
    titleDisplay(list);
    // reset todo input value
    input.value = "";
  }
}

/** isInputEmpty
 * return true if the user input is empty
 * @param {string} input.value
 */
function isInputEmpty(input) {
  return !input.value || input.value === "" || input.value === null;
}

/** titleDisplay
 * display the list title "ToDo" || "Done" if the list contain 1 or more li item
 * @param {HTMLElement} element
 */
function titleDisplay(element) {
  // Display title if the list contain 1 or more item
  if (element.childNodes.length > 0) {
    element.querySelector(".title").hidden = false;
  }
}

/** removeTodo
 * remove todo item
 * @param {HTMLElement} element - todo li item
 */
function removeTodo(element) {
  element.parentElement.remove();
}

/** doneTodo
 * put the todo item in the done list
 * @param {HTMLElement} element - todo li item
 */
function doneTodo(element) {
  // display title if the list contain 1 or more todo item
  titleDisplay(doneList);
  element.parentElement.querySelector("p").style.textDecoration = "line-through";
  doneList.appendChild(element.parentElement);
}

/** notDoneTodo
 * put the todo item in the list
 * @param {HTMLElement} element - todo li item
 */
function notDoneTodo(element) {
  // display title if the list contain 1 or more todo item
  titleDisplay(list);
  element.parentElement.querySelector("p").style.textDecoration = "";
  list.appendChild(element.parentElement);
}

// add todo item when add button is clicked
add.addEventListener("click", () => {
  addTodo(input);
});

document.addEventListener("click", (e) => {
  // remove todo item when "X" button is clicked
  if (e.target && e.target.id == "remove") {
    removeTodo(e.target);
  }

  if (e.target && e.target.id == "done") {
    if (e.target.parentElement.parentElement.id === "list") {
      // switch todo to done list
      doneTodo(e.target);
    } else {
      // switch todo to list
      notDoneTodo(e.target);
    }
  }
});
