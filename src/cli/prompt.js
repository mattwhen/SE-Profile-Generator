const inquirer = require('inquirer');
const fs = require('fs/promises');
const Manager = require('../lib/Manager');

const employeeArr = [];

function startPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter a managers name: ',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Please enter a managers ID: ',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter a managers email: ',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter the managers office number: ',
        },
        {
            type: 'list',
            name: 'addMembers',
            message: 'Would you like to add additional team members?',
            choices: [
                'Engineer', 'Intern', 'Finish building team'
            ],
        },
    ]) .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber, answers.addMembers);
        employeeArr.push(manager); // Push the manager variable into the empty Array, in this case the employeeArr
    }) .then((response) => {
        console.log('Employees', employeeArr);
    })
    .catch((err) => console.error(err));
}

function main() {
    startPrompt();
}
// Export the main() function so it is available to the other files. 
module.exports = main; 