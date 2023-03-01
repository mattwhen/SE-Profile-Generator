// Require team profiles
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer)); // Library used to repeatedly ask user if they want to keep adding more members.
const fs = require("fs/promises");
const generateBaseHtml = require("./generateHtml");

const teamArray = [];

function managerPrompt() {
  inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Please enter a managers name: ",
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter a managers ID: ",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter a managers email: ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the managers office number: ",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.officeNumber,
        answers.addMembers
      );
      teamArray.push(manager); // Push the manager variable into the empty Array, in this case the managerArray
      addMembersPrompt();
    })
    .catch((err) => console.error(err));
}

function engineerPrompt() {
  inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter the Engineer's name: ",
      },
      {
        type: "input",
        name: "engineerId",
        message: "Please enter the Engineer's ID: ",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter the Engineer's email: ",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter the Engineer's GitHub username: ",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer (
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      teamArray.push(engineer); // Push the manager variable into the empty Array, in this case the managerArray
      addMembersPrompt();
    })
    .catch((err) => console.error(err));
}

function internPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Please enter a Intern's name: "
        },
        {
            type: "input",
            name: "internId",
            message: "Please enter the Intern's ID: ",
          },
          {
            type: "input",
            name: "internEmail",
            message: "Please enter the Intern's email: ",
          },
          {
            type: "input",
            name: "internSchool",
            message: "Please enter the School the Intern attends: ",
          },
    ])
    .then((answers) => {
        const intern = new Intern (
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
        );
        teamArray.push(intern);
        addMembersPrompt();
    }) 
    .catch((err) => console.err(err));
}

function addMembersPrompt() {
  // Prompt another series of prompts for adding team members and push data into teamArray
  inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to add additional team members?",
        choices: ["Engineer", "Intern", "No"]
      },
    ])
    .then(({ choice }) => { // {choice} Object deconstructor
      console.log(choice);
      switch (choice) {
        case "Engineer": // If engineer is selected, run engineerPrompt()
          engineerPrompt();
          break;
        case "Intern": // If Intern is selected, run internPrompt()
          internPrompt();
          break;
        default: // If no matches, generate Html page. 
          const teamHtml = generateBaseHtml(teamArray);
          writeHtml(teamHtml);
      }
    }); // End of addMembersPrompt function
}
function writeHtml(content) {
  fs.writeFile("TeamProfile.html", content, { encoding: "utf-8" })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

function main() {
  managerPrompt();
}
// Export the main() function so it is available.
module.exports = main;
