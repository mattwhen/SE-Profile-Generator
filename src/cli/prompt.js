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
    ]) .then((answers) => {
        console.log('Manager answers', answers);
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        employeeArr.push(manager); 

    }) .catch((err) => console.error(err));
}

function main() {
    startPrompt();
}

module.exports = main; 