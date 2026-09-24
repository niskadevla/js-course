/*
1. Нужно найти в JS этот input и форму
2. повесить обработчик события на форму
3. при нажатии на кнопку прерывать дефолтное(по умолчанию) поведение браузера
4. Создать глобальную переменную  todos
5. найти todo-list и создать переменную
6. Отрендерить список, поместив в todo-list
7. в конце очистить форму и перенести фокус обратно на инпут
 */

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

function init() {
  todoForm.addEventListener('submit', handleAddTodo);
}

function handleAddTodo(event) {
  event.preventDefault();

  const text = todoInput.value.trim();
  if (!text) return;

  const todo = {
    id: Date.now(),
    text,
    completed: false
  };

  todos.push(todo);

  renderTodos();

  todoInput.value = '';
  todoInput.focus();
}

function renderTodos() {
  todoList.innerHTML = todos.map(todo => `
    <li class="list-group-item" data-id="${todo.id}">
      ${todo.text}
    </li>
  `).join('');
}

init();