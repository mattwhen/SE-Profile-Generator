const Manager = require('../lib/Manager');

function generateTeamList(list = []) {
    console.log('Generating HTML...', list);
    const htmlArray = list.map((member, index) => {
        console.log(member, index)
        if (member instanceof Manager) {
            return `
            
            <li id='team-${member.getId()}'>
                <h4>${member.getName()}</h4>
                <p>Office number: ${member.getOfficeNumber()}</p>
                <a href='mailto:${member.getEmail()}'>${member.getEmail()}</h4>
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