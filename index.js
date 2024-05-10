// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
//require generate markdown
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your Project?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your Project?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your Project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your Project?"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using?',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Mozilla Public License 2.0'],
        default: 'MIT'
    },
    {
        type: "input",
        name: "contributors",
        message: "Who contributed to your Project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How do you test your Project?"
    },
    {
        type: "input",
        name: "questions",
        message: "What questions do you have on your Project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github?"
    },
    {
        type: 'input',
        name: 'email',
        message: 'Add your email related to your project so people can get in contact.',
        default: '---Email goes here---'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err, result) => {
        if (err) throw err
        console.log('readme created');
    })
}



// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to Amanda's README generator!")
    askQuestions()
}
function askQuestions() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)

            let markdownData = generateMarkdown(answers);
            console.log("Returned From Function Call: ", markdownData);
            writeToFile('README.md', markdownData)


        })

}
// Function call to initialize app
init();
