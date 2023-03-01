const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

function generateTeamList(list = []) {
    console.log('Generating HTML...', list);
    const htmlArray = list.map((member, index) => {
        console.log('if manager is an instance of', member, index)
        if (member instanceof Manager) {
            return `
            <li id='team-${member.getId()}'>
                <h4>${member.getName()}</h4>
                <p>Office number: ${member.getOfficeNumber()}</p>
                <a href='mailto:${member.getEmail()}subject:The%20subject%20of%20the%20mail'>${member.getEmail()}</a>
                </h4>
            </li>
            `
        }
        if (member instanceof Engineer) {
            console.log('if Engineer is an instance of', member, index);
            return `
            <li id= 'team-${member.getId()}'>
                <h4>${member.getName()}</h4>
                <h4>${member.getRole()}</h4>
                <p>${member.getId()}</p>
                <p>${member.getEmail()}</p>
                <p> Github:
                <a href='https://github.com/${member.getGitHub()}' target= "_blank">${member.getGitHub()}</a>
                </p>
            </li>
            `
        }
        if (member instanceof Intern) {
            console.log('if Intern is an instance of', member, index);
            return `
            <li id= 'team-${member.getId()}'>
                <h4>${member.getName()}</h4>
                <h4>${member.getRole()}</h4>
                <p>${member.getId()}</p>
                <p>${member.getSchool()}</p>
            </li>
            `
        }
    })

    return htmlArray.join('');
}

function generateBaseHtml(list) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <ul>
        ${generateTeamList(list)} 
        </ul>
    </body>
    </html>
    `
}

module.exports = generateBaseHtml;