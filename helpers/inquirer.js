const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'Choose an option',
        choices: [
            {
                value: '1',
                name: '1. Create task'
            },
            {
                value: '2',
                name: '2. List tasks'
            },
            {
                value: '3',
                name: '3. List completed tasks'
            },
            {
                value: '4',
                name: '4. List pending tasks'
            },
            {
                value: '5',
                name: '5. Complete task(s)'
            },
            {
                value: '6',
                name: '6. Delete task'
            },
            {
                value: '0',
                name: '0. Exit'
            },
        ]
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('======================='.green);
    console.log('   Choose an option    '.green);
    console.log('=======================\n'.green);

    const { option } = await inquirer.prompt(questions);

    return option;
}

const pause = async () => {

    console.log('\n');

    await inquirer.prompt([
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} to continue`,
        }
    ]);

}

const readInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Please insert a value';
                }
                return true;
            }
        }
    ];

    const { description } = await inquirer.prompt(question);
    return description;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput
}