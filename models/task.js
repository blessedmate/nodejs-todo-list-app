const { v4: uuidv4 } = require('uuid'); // <== NOW DEPRECATED!

class Task {

    id = '';
    description = '';
    completedIn = null;

    constructor(description) {
        this.id = uuidv4();
        this.description = description;
    }

}

module.exports = Task;