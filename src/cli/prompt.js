// Require team profiles
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer)); // Library used to repeatedly ask user if they want to keep adding more members.
const fs = require("fs/promises");
const generateHtmlTemplate = require("./generateHtml");
const generateBaseHtml = require("./generateHtml");

const teamArray = [];

function startPrompt() {
  inquirer
    .prompt([
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
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Please enter a Engineers name: ",
      },
      {
        type: "input",
        name: "engineerId",
        message: "Please enter a engineers ID: ",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Please enter a engineer email: ",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Please enter the engineers github: ",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
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

function addMembersPrompt() {
  // Prompt another series of prompts for adding team members and push data into EmployeeArray
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to add additional team members?",
        choices: ["Engineer", "Intern", "No"],
        // questions: [
        //     {
        //         type: "list",
        //         name: "addMember",
        //         message: "Select from the following options: ",

        //     },
        //     {
        //         type: "input",
        //         name: "memberName",
        //         message: "What is the team members name?"
        //     },
        //     {
        //         type: "input",
        //         name: "memberId",
        //         message: "Please enter their ID:"
        //     },
        //     {
        //         type: "input",
        //         name: "memberEmail",
        //         message: "Please enter the members email:",
        //     },
        //     {
        //         type: "input",
        //         name: "githubUsername",
        //         message: "Enter your GitHub username: ",
        //         when: (teamMember) => teamMember.addMember === 'Engineer' // Only prompt this question if 'Engineer' option is selected.
        //     },
        //     {
        //         type: "input",
        //         name: "schoolName",
        //         message: "What school do you attend? ",
        //         when: (teamMember) => teamMember.addMember === 'Intern' // Only prompt this question if 'Intern' option is selected.
        //     }
        // ]
      },
    ])
    .then(({ choice }) => {
      console.log(choice);
      switch (choice) {
        case "Engineer":
          engineerPrompt();
          break;
        case "Intern":
          internPrompt();
          break;
        default:
          const teamHtml = generateBaseHtml(teamArray);
          writeHtml(teamHtml);
      }
      // const members = data.teamMember;
      // for (let i = 0; i < members.length; i++) {
      //     const membersArray = members[i];
      //     if (membersArray.addMember === 'Engineer') {
      //        const engineer = new Engineer(membersArray.memberName, membersArray.memberId, membersArray.memberEmail, membersArray.githubUsername);
      //        engineerArray.push(engineer);
      //        console.log("this is the engineer array", engineerArray);
      //     }
      //     else if (membersArray.addMember === 'Intern') {
      //         const intern = new Intern(membersArray.memberName, membersArray.memberId, membersArray.memberEmail, membersArray.schoolName);
      //         internArray.push(intern);
      //         console.log('Data in the intern array', internArray);
      //     }
      // }

      // const content = generateHtmlTemplate(managerArray[0].name);

      // Generate HTML file
    }); // End of addMembersPrompt function
}
function writeHtml(content) {
  fs.writeFile("TeamProfile.html", content, { encoding: "utf-8" })
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

function main() {
  startPrompt();
}
// Export the main() function so it is available to the other files.
module.exports = main;
