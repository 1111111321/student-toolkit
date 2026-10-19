/* ===================================================
   To-do list
   Each task is an <li> holding a checkbox, the text and a delete button.
   =================================================== */

const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const todoCount = document.querySelector('#todoCount');
const clearDone = document.querySelector('#clearDone');

/* Update the "N tasks, M done" line under the list */
function updateCount() {
  // TODO 1: count the <li> elements and the ones with the .done class
  //   hint: todoList.querySelectorAll('li').length
  //         todoList.querySelectorAll('li.done').length
  // show "No tasks yet" when there are none
}

/* Build one task and put it at the end of the list */
function addTodo(text) {
  // TODO 2: create the <li>
  // TODO 3: create <input type="checkbox">, <span class="todo-text">text</span>,
  //         and <button class="todo-del" type="button" aria-label="Delete this task">×</button>
  //         then append all three to the <li>
  // TODO 4: when the checkbox changes, toggle the 'done' class on the <li>,
  //         then call updateCount()
  // TODO 5: when the delete button is clicked, remove the <li>,
  //         then call updateCount()
  // TODO 6: append the <li> to todoList
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO 7: const text = todoInput.value.trim()
  //         return early if it is empty, otherwise:
  //         addTodo(text), clear the input, updateCount()
});

clearDone.addEventListener('click', () => {
  // TODO 8: remove every li.done, then updateCount()
});

updateCount();
