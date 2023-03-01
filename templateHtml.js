const Manager = require('')

function generateTeamHtml(teamArray) {
    console.log(teamArray);
    for (const [index, teamMember] of teamArray) {
        console.log(index, teamMember);
    }
}


function generateHtmlTemplate(managerArray) {
   const template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <ul>
            <li>
                <p>${managerArray[0].name}</p>
            </li>
        </ul>
    </body>
    </html>`; 
    return template; 
}

module.exports = generateHtmlTemplate; 