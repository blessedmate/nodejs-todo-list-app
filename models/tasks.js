const Task = require('./task');
require('colors');

class Tasks {

    tasksList = {};

    get tasksAsArray() {
        const list = [];

        Object.keys(this.tasksList).forEach(key => {
            list.push(this.tasksList[key]);
        })
        return list;
    }

    constructor() {
    }

    createTask(description = '') {
        const task = new Task(description);

        this.tasksList[task.id] = task;
    }

    deleteTask(id = '') {

        if (this.tasksList[id]) {
            delete this.tasksList[id];
        }
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(t => {
            this.tasksList[t.id] = t;
        });
    }

    // Displays the current list of tasks
    displayList() {
        console.log();

        const list = this.tasksAsArray;

        list.forEach((t, i) => {
            const idx = `${i + 1}`.green;

            const completed = (t.completedIn)
                ? 'Completed'.green
                : 'Pending'.red;

            console.log(`${idx}. ${t.description} :: ${completed}`);
        })
    }

    // Displays completed or pending tasks, according to parameter
    displayCompletedPending(completed) {
        console.log();

        const list = this.tasksAsArray;

        list.forEach((t, i) => {
            const state = (t.completedIn)
                ? 'Completed'.green
                : 'Pending'.red;

            if (completed) {
                // Show completed
                if (t.completedIn) {
                    const idx = `${i + 1}`.green;
                    console.log(`${idx}. ${t.description} :: ${t.completedIn.cyan}`);
                }
            }
            else {
                // Show pending
                if (!t.completedIn) {
                    const idx = `${i + 1}`.green;
                    console.log(`${idx}. ${t.description} :: ${state}`);
                }
            }
        })
    }

    // Mark selected tasks as completed
    markCompleted(ids = []) {
        ids.forEach(id => {
            const task = this.tasksList[id];
            if (!task.completedIn) {
                task.completedIn = new Date().toISOString();
            }
        });

        this.tasksAsArray.forEach(t => {
            if (!ids.includes(t.id)) {
                this.tasksList[t.id].completedIn = null;
            }
        });
    }
}


module.exports = Tasks;