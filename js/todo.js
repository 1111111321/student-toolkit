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
  const total = todoList.querySelectorAll('li').length;
  const done = todoList.querySelectorAll('li.done').length;

  if (total === 0) {
    todoCount.textContent = 'No tasks yet';
    return;
  }

  todoCount.textContent = `${total} tasks, ${done} done`;
}

/* Build one task and put it at the end of the list */
function addTodo(text) {
  /* 1. The row itself */
  const li = document.createElement('li');

  /* 2. The checkbox, with a label screen readers can announce */
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.setAttribute('aria-label', 'Mark as done: ' + text);

  /* 3. The text of the task */
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = text;

  /* 4. The delete button */
  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'todo-del';
  delBtn.setAttribute('aria-label', 'Delete this task');
  delBtn.textContent = '×';

  /* 5. Ticking the checkbox toggles the .done class;
        the stylesheet draws the line-through. */
  checkbox.addEventListener('change', () => {
    li.classList.toggle('done', checkbox.checked);
    updateCount();
  });

  /* 6. Deleting removes the whole row */
  delBtn.addEventListener('click', () => {
    li.remove();
    updateCount();
  });

  /* 7. Assemble: three children go into the <li>, the <li> goes into the list */
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  todoList.appendChild(li);

  updateCount();
}

/* The form: pressing Enter or clicking Add both land here */
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (text === '') return;

  addTodo(text);
  todoInput.value = '';
  todoInput.focus();
});

/* Remove every completed task */
clearDone.addEventListener('click', () => {
  todoList.querySelectorAll('li.done').forEach((li) => li.remove());
  updateCount();
});

updateCount();
