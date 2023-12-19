const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        message: 'Choose three characters for your logo',
        name: 'logo',

    },
    {
        message: 'Choose a colour for your logo',
        name: 'logoColour',

    },
    {
        message: 'Choose a shape colour for your logo',
        name: 'shapeColour',

    },
    {
        type: 'list',
        message: 'Choose a shape for your logo',
        name: 'logoShape',
        choices: ['triangle', 'circle', 'square'],

    },

]).then(answers => {
    if (answers.logoShape == 'triangle') {
        fs.writeFileSync('logo.svg', `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
		    <polygon points="150, 18 244, 182 56, 182" fill='${answers.shapeColour}'/>
            <text x="150" y="100" fill="${answers.logoColour}">${answers.logo}</text>

	  </svg>
        `)
    } 
    
    if (answers.logoShape == 'square') {
        fs.writeFileSync('logo.svg', `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
		    <rect width="200px" height="200px" fill="${answers.shapeColour}" />
            <text x="100" y="100" fill="${answers.logoColour}">${answers.logo}</text>

	  </svg>
        `)
    } 
    
    if (answers.logoShape == 'circle') {
        fs.writeFileSync('logo.svg', `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
		    <circle cx="150" cy="100" r="80" fill="${answers.shapeColour}" />
            <text x="150" y="100" fill="${answers.logoColour}">${answers.logo}</text>

	  </svg>
        `)
    } console.log('Generated logo.svg')
});


