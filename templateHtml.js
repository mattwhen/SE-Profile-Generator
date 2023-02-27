
function generateHtmlTemplate() {
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
                <p>${manager.getName()}</p>
            </li>
        </ul>
    </body>
    </html>`; 
    return template; 
}

module.exports = generateHtmlTemplate; 