require('colors');

const { inquirerMenu,
    pause,
    readInput } = require('./helpers/inquirer');
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
                // create option
                const description = await readInput('Description:')
                tasks.createTask(description);
                break;
            case '2':
                // list options
                tasks.displayList();
                break;

        }

        saveDB(tasks.tasksAsArray);

        if (opt !== '0') await pause();

    } while (opt !== '0');

}

main();