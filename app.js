require('colors');

const { inquirerMenu,
    pause,
    readInput } = require('./helpers/inquirer');

const Tasks = require('./models/tasks');


const main = async () => {

    let opt = '';
    const tasks = new Tasks();

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
                console.log(tasks.taskList);
                break;

        }

        if (opt !== '0') await pause();

    } while (opt !== '0');

}

main();