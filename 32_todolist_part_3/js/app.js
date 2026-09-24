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
const emptyState = document.getElementById('empty-state');
const todoCount = document.getElementById('todo-count');

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
  updateEmptyState();
  updateTodoCount();

  todoList.innerHTML = todos.map(todo => `
    <li 
      class="list-group-item d-flex align-items-center" 
      data-id="${todo.id}"
      >
        <div class="form-check flex-grow-1">
          <label class="form-check-label ${todo.completed ? 'completed' : ''}">
            <input 
              type="checkbox"
              class="form-check-input"
              ${todo.completed ? 'checked' : ''}
            >
            ${todo.text}
          </label>
        </div>
        
        <button class="btn btn-outline-primary btn-sm edit-btn me-1">
            <i class="bi bi-pencil"></i>
        </button>

        <button class="btn btn-outline-danger btn-sm delete-btn">
            <i class="bi bi-trash"></i>
        </button>
    </li>
  `).join('');
}

function updateEmptyState() {
  emptyState.style.display = todos.length === 0 ? 'block' : 'none';
}

function updateTodoCount() {
  const remainingCount = todos.filter(t => !t.completed).length;
  todoCount.textContent = remainingCount;
}

init();