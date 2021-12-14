require('colors');

const { inquirerMenu,
    pause,
    readInput,
    listTasksToDelete,
    confirm,
    listTasksToComplete } = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');

const Tasks = require('./models/tasks');


const main = async () => {

    let opt = '';
    const tasks = new Tasks();

    // First, load tasks from JSON
    const tasksFromDB = readDB();
    if (tasksFromDB) {
        tasks.loadTasksFromArray(tasksFromDB);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // create task
                const description = await readInput('Description:')
                tasks.createTask(description);
                break;
            case '2':
                // list tasks
                tasks.displayList();
                break;
            case '3':
                // list completed tasks
                tasks.displayCompletedPending(true);
                break;
            case '4':
                // list pending tasks
                tasks.displayCompletedPending(false);
                break;
            case '5':
                // complete tasks
                const ids = await listTasksToComplete(tasks.tasksAsArray);
                tasks.markCompleted(ids);
                break;
            case '6':
                // delete task
                const id = await listTasksToDelete(tasks.tasksAsArray);
                if (id !== '0') {
                    const ok = await confirm('Are you sure?');

                    if (ok) {
                        tasks.deleteTask(id)
                    }
                }
                break;

        }

        saveDB(tasks.tasksAsArray);

        if (opt !== '0') await pause();

    } while (opt !== '0');

}

main();