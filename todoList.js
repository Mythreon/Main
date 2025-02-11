/*
Ignore this for now. Used for a future project, and a future project only. However, I'm including it here because most probably I will make it public soon.

        const addTaskBtn = document.getElementById('addTaskBtn');
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        function renderTasks() {
            // Clear current task list
            taskList.innerHTML = '';

            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.classList.add('task-item');

                const taskText = document.createElement('span');
                taskText.textContent = task.text;
                taskText.classList.add('task');
                if (task.completed) {
                    taskText.classList.add('completed');
                }
                li.appendChild(taskText);

                const completeBtn = document.createElement('button');
                completeBtn.textContent = '✔';
                completeBtn.classList.add('complete-btn');
                completeBtn.addEventListener('click', () => toggleComplete(index));
                li.appendChild(completeBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '🗑️';
                deleteBtn.classList.add('delete-btn');
                deleteBtn.addEventListener('click', () => deleteTask(index));
                li.appendChild(deleteBtn);

                taskList.appendChild(li);
            });
        }

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') return; 

            const newTask = {
                text: taskText,
                completed: false,
            };

            tasks.push(newTask);

            localStorage.setItem('tasks', JSON.stringify(tasks));

            taskInput.value = '';

            renderTasks();
        }

        function toggleComplete(index) {
            tasks[index].completed = !tasks[index].completed;

            localStorage.setItem('tasks', JSON.stringify(tasks));

            renderTasks();
        }

        function deleteTask(index) {
            tasks.splice(index, 1); 

            localStorage.setItem('tasks', JSON.stringify(tasks));

            renderTasks();
        }

        addTaskBtn.addEventListener('click', addTask);

        taskInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });

        renderTasks();

TO DO LIST ABOVE

alr, then an another project.

class Task {
    constructor(id, title, description, dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    updateDescription(newDescription) {
        this.description = newDescription;
    }

    updateDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    display() {
        return `${this.title} (${this.completed ? 'Completed' : 'Pending'}) - Due: ${this.dueDate}`;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(title, description, dueDate) {
        const newTask = new Task(this.nextId, title, description, dueDate);
        this.tasks.push(newTask);
        this.nextId++;
        console.log(`Task added: ${newTask.display()}`);
    }

    removeTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const removedTask = this.tasks.splice(index, 1)[0];
            console.log(`Task removed: ${removedTask.display()}`);
        } else {
            console.log(`Task with id ${id} not found.`);
        }
    }

    editTask(id, newTitle, newDescription, newDueDate) {
        const task = this.findTask(id);
        if (task) {
            task.updateTitle(newTitle);
            task.updateDescription(newDescription);
            task.updateDueDate(newDueDate);
            console.log(`Task updated: ${task.display()}`);
        }
    }

    toggleTaskCompletion(id) {
        const task = this.findTask(id);
        if (task) {
            task.toggleCompletion();
            console.log(`Task completion toggled: ${task.display()}`);
        }
    }

    listTasks() {
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
        } else {
            this.tasks.forEach(task => console.log(task.display()));
        }
    }

    findTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {
            console.log(`Task with id ${id} not found.`);
        }
        return task;
    }

    clearCompletedTasks() {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => !task.completed);
        const removedCount = initialLength - this.tasks.length;
        console.log(`${removedCount} completed tasks removed.`);
    }

    sortTasksByDueDate() {
        this.tasks.sort((a, b) => {
            const dateA = new Date(a.dueDate);
            const dateB = new Date(b.dueDate);
            return dateA - dateB;
        });
        console.log("Tasks sorted by due date.");
    }

    sortTasksByTitle() {
        this.tasks.sort((a, b) => a.title.localeCompare(b.title));
        console.log("Tasks sorted by title.");
    }

    filterTasksByStatus(status) {
        const filteredTasks = this.tasks.filter(task => task.completed === status);
        if (filteredTasks.length > 0) {
            console.log(`${status ? 'Completed' : 'Pending'} tasks:`);
            filteredTasks.forEach(task => console.log(task.display()));
        } else {
            console.log(`No ${status ? 'completed' : 'pending'} tasks found.`);
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        console.log("Tasks saved to local storage.");
    }

    loadFromLocalStorage() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.tasks = savedTasks.map(taskData => {
            const task = new Task(taskData.id, taskData.title, taskData.description, taskData.dueDate);
            task.completed = taskData.completed;
            return task;
        });
        this.nextId = this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
        console.log("Tasks loaded from local storage.");
    }

    batchAddTasks(tasksArray) {
        tasksArray.forEach(taskData => {
            const { title, description, dueDate } = taskData;
            this.addTask(title, description, dueDate);
        });
        console.log("Batch tasks added.");
    }

    batchEditTasks(taskEdits) {
        taskEdits.forEach(edit => {
            const { id, newTitle, newDescription, newDueDate } = edit;
            this.editTask(id, newTitle, newDescription, newDueDate);
        });
        console.log("Batch tasks edited.");
    }

    batchToggleTasksCompletion(taskIds) {
        taskIds.forEach(id => this.toggleTaskCompletion(id));
        console.log("Batch tasks completion toggled.");
    }
}

// Sample usage
const manager = new TaskManager();

// Adding tasks
manager.addTask('Buy groceries', 'Milk, Eggs, Bread', '2025-02-15');
manager.addTask('Complete homework', 'Math exercises', '2025-02-12');
manager.addTask('Call Mom', 'Catch up with family', '2025-02-14');

// Listing tasks
manager.listTasks();

// Toggling task completion
manager.toggleTaskCompletion(1);  // Mark task with id=1 as completed

// Editing a task
manager.editTask(2, 'Complete homework', 'Math, Science, and History exercises', '2025-02-13');

// Removing a task
manager.removeTask(3);

// Sorting tasks
manager.sortTasksByDueDate();
manager.listTasks();

// Filtering tasks
manager.filterTasksByStatus(false);  // Show only pending tasks

// Saving and loading from local storage
manager.saveToLocalStorage();
manager.loadFromLocalStorage();

// Clearing completed tasks
manager.clearCompletedTasks();

// Batch operation examples
manager.batchAddTasks([
    { title: 'Read a book', description: 'Finish reading chapter 5', dueDate: '2025-02-17' },
    { title: 'Visit a friend', description: 'Hang out with Jane', dueDate: '2025-02-18' }
]);

manager.batchToggleTasksCompletion([1, 2]);  // Toggle completion for tasks with ids 1 and 2

manager.batchEditTasks([
    { id: 2, newTitle: 'Complete homework', newDescription: 'Math, Science, History', newDueDate: '2025-02-13' }
]);

manager.listTasks();
*/
