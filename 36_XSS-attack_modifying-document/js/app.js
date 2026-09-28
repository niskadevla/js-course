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
const STORAGE_KEY = 'todos';

let todos = [];

function init() {
  loadTodos();
  renderTodos()

  todoForm.addEventListener('submit', handleAddTodo);
  todoList.addEventListener('click', handleTodoClick);
}

function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  const stored = localStorage.getItem(STORAGE_KEY);
  todos = stored ? JSON.parse(stored) : [];
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

  saveTodos();
  renderTodos();

  todoInput.value = '';
  todoInput.focus();
}

function handleTodoClick(event) {
  const target = event.target;
  const li = target.closest('li');

  if (!li) return;

  const id = Number(li.dataset.id);

  if (target.classList.contains('form-check-input')) {
    toggleComplete(id);
  } else if (target.closest('.delete-btn')) {
    deleteTodo(id);
  } else if (target.closest('.edit-btn')) {
    startEdit(id, li);
  } else if (target.closest('.save-btn')) {
    saveEdit(id, li);
  } else if (target.closest('.cancel-btn')) {
    renderTodos();
  }
}

function toggleComplete(id) {
  const todo = todos.find(t => t.id === id);

  if (todo) {
    todo.completed = !todo.completed;
  }

  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);

  saveTodos();
  renderTodos();
}

function startEdit(id, li) {
  const todo = todos.find(t => t.id === id);

  if (!todo) return;

  li.innerHTML = `
    <div class="flex-grow-1 me-2">
      <input 
        type="text" 
        class="form-control form-control-sm edit-input" 
        value="${todo.text}" 
       >
    </div>
    
    <button class="btn btn-outline-success btn-sm save-btn me-1">
        <i class="bi bi-check-lg"></i>
    </button>
    <button class="btn btn-outline-secondary btn-sm cancel-btn">
        <i class="bi bi-x-lg"></i>
    </button>
  `;

  const input = li.querySelector('.edit-input');
  input.focus();
  input.select();
}

function saveEdit(id, li) {
  const input = li.querySelector('.edit-input');
  const newText = input.value.trim();

  if (!newText) {
    renderTodos();
    return;
  }

  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.text = newText;
    saveTodos();
  }

  renderTodos();
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