// Require team profiles
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer)); // Library used to repeatedly ask user if they want to keep adding more members.
const fs = require('fs/promises');


const employeeArray = [];

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
        }
      
    ]) .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber, answers.addMembers);
        employeeArray.push(manager); // Push the manager variable into the empty Array, in this case the employeeArray
        console.log(`Return this object: ${JSON.stringify(employeeArray)}`);
        addMembersPrompt();
    }) 
    .catch((err) => console.error(err));
}

function addMembersPrompt() {
    // Prompt another series of prompts for adding team members and push data into EmployeeArray 
    inquirer.prompt([
        {
        type: "loop",
        name: "teamMember",
        message: "Would you like to add any additional team members?",
        questions: [
            {
                type: "list",
                name: "addMember",
                message: "Select from the following options: ",
                choices: ['Engineer', 'Intern', 'I am done adding members to my team']
            },
            {
                type: "input", 
                name: "memberName",
                message: "What is the team members name?"
            },
            {
                type: "input",
                name: "memberName",
                message: "Please enter their ID:"
            },
            {
                type: "input",
                name: "memberEmail",
                message: "Please enter the members email:",
            },
            {
                type: "input",
                name: "githubUsername",
                message: "Enter your GitHub username: ",
                when: (teamMember) => teamMember.addMember === 'Engineer' // Only prompt this question if 'Engineer' option is selected.
            },
            {
                type: "input",
                name: "schoolName",
                message: "What school do you attend? ",
                when: (teamMember) => teamMember.addMember === 'Intern' // Only prompt this question if 'Intern' option is selected.
            }
                ]
        }
        
    ])
    .then((data) => console.log(data));
}

function main() {
    startPrompt();
}
// Export the main() function so it is available to the other files. 
module.exports = main; 