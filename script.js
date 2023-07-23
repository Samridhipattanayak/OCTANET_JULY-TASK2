// Task counter for unique task IDs
let taskId = 0;

function addTask() {
  const taskNameInput = document.getElementById('task-name');
  const taskCategorySelect = document.getElementById('task-category');
  const taskDeadlineInput = document.getElementById('task-deadline');
  const taskPrioritySelect = document.getElementById('task-priority');

  const taskName = taskNameInput.value.trim();
  const taskCategory = taskCategorySelect.value;
  const taskDeadline = taskDeadlineInput.value;
  const taskPriority = taskPrioritySelect.value;

  if (taskName === '') {
    alert('Please enter a task name');
    return;
  }

  const taskList = document.getElementById('task-list');

  const taskElement = document.createElement('li');
  taskElement.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <img class="task-icon" src="task.png" alt="Task Icon">
    <span class="task-name">${taskName}</span>
    <span class="task-category">(${taskCategory})</span>
    <span class="task-deadline">${taskDeadline}</span>
    <span class="task-priority">[${taskPriority}]</span>
    <button class="task-delete-btn" onclick="deleteTask(${taskId})">Delete</button>
  `;

  taskElement.setAttribute('id', `task-${taskId}`);
  taskId++;

  taskList.appendChild(taskElement);

  // Clear input fields
  taskNameInput.value = '';
  taskCategorySelect.selectedIndex = 0;
  taskDeadlineInput.value = '';
  taskPrioritySelect.selectedIndex = 0;
}

function deleteTask(taskId) {
  const taskElement = document.getElementById(`task-${taskId}`);
  taskElement.remove();
}

function searchTasks() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.trim().toLowerCase();

  const taskList = document.getElementById('task-list');
  const tasks = taskList.getElementsByTagName('li');

  for (const task of tasks) {
    const taskName = task.querySelector('.task-name').textContent.toLowerCase();

    if (taskName.includes(searchTerm)) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  }
}

function showAllTasks() {
  const taskList = document.getElementById('task-list');
  const tasks = taskList.getElementsByTagName('li');

  for (const task of tasks) {
    task.style.display = 'flex';
  }
}

function showCompletedTasks() {
  const taskList = document.getElementById('task-list');
  const tasks = taskList.getElementsByTagName('li');

  for (const task of tasks) {
    const checkbox = task.querySelector('.task-checkbox');

    if (checkbox.checked) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  }
}

function showPendingTasks() {
  const taskList = document.getElementById('task-list');
  const tasks = taskList.getElementsByTagName('li');

  for (const task of tasks) {
    const checkbox = task.querySelector('.task-checkbox');

    if (!checkbox.checked) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  }
}

