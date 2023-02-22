function generateTeamList(list = []) {
    console.log('Generating HTML...', list);
    return list.map((member, index) => {
        if (member instanceof Manager) {
            return `
            <ul>
            <li><h4>${manager.getName()}</h4></li>
            <li><h4>${manager.getId()}</h4></li>
            <li><h4>${manager.getEmail()}</h4></li>
            </ul>
            `
        }
    })
}

function generateBaseHtml() {
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
        ${[]} 
    </body>
    </html>
    `
}