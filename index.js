const inquirer = require('inquirer');
const fs = require("fs")

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your Email adress?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your Project Name?',
            name: 'project',
        },
        {
            type: 'input',
            message: 'Please write down a short description of your project',
            name: 'description',
        },
        {
            type: 'checkbox',
            message: 'what kind of License should your project have?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What does the user need to know about the Repo?',
            name: 'repo',
        },
        {
            type: 'input',
            message: 'What does the user needs to know about contributing ot the Repo?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Do you have any credits you want to mention?(Leave links)',
            name: 'credits',
        },
    ])

    .then((response) =>{
    const readme = 
`## <${response.project}>

## Brief Information
*Email: ${response.email}
*GitHub: ${response.username}

## Description
${response.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${response.install}

## Usage
*${response.repo} Here are some screenshots of this project.

    !['screenshot']('assets/images/screenshot.png')
    

## Credits
*${response.credits}

## License
*${response.license}

## How to Contribute
*${response.contributing}       

## Tests
*If you want to run some test you should run this command "${response.tests}"
`
    
       fs.writeFile('README.md', readme, (err) =>
       err ? console.error(err) : console.log('Success!'))
    });