const Task = require('./task')

class Tasks {

    taskList = {};

    constructor() {
    }

    createTask(description = '') {
        const task = new Task(description);

        this.taskList[task.id] = task;
    }
}


module.exports = Tasks;