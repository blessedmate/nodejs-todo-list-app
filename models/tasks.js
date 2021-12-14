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
}


module.exports = Tasks;