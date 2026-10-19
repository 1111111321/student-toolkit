/* ===================================================
   待办清单
   每条任务 = 一个 <li>，里面放 checkbox + 文字 + 删除按钮
   =================================================== */

const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const todoCount = document.querySelector('#todoCount');
const clearDone = document.querySelector('#clearDone');

/* 更新底部"共 N 项，完成 M 项" */
function updateCount() {
  // TODO ①：统计 todoList 里 li 的总数和带 .done 的数量
  //          提示：todoList.querySelectorAll('li').length
  //                todoList.querySelectorAll('li.done').length
  //          总数是 0 时显示"还没有任务"
}

/* 创建一条任务并插到列表里 */
function addTodo(text) {
  // TODO ②：创建 <li>
  // TODO ③：里面放 <input type="checkbox">、<span class="todo-text">文字</span>、删除按钮
  //          删除按钮建议用 <button class="todo-del" aria-label="删除这条任务">×</button>
  // TODO ④：勾选 checkbox 时给 li 切换 'done' 类，并调用 updateCount()
  // TODO ⑤：点删除按钮时把这条 li 移除，并调用 updateCount()
  // TODO ⑥：把 li 追加到 todoList
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO ⑦：const text = todoInput.value.trim()
  //          如果为空就 return（虽然 required 已经拦了一层）
  //          否则 addTodo(text)、清空输入框、updateCount()
});

clearDone.addEventListener('click', () => {
  // TODO ⑧：把所有 li.done 删掉，然后 updateCount()
});

updateCount();
