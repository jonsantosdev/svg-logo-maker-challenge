const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        name: "letters",
        message: "Please type in 3 letter."
    },
    {
        type: "input",
        name: "colorText",
        message: "Please type in a color or a hexadecimal number of what you want your letters to be."
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a shape.",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: "colorShape",
        message: "Please type in a color or a hexadecimal number of what you want your shape to be."
    },    

])
.then((answers) => {
    console.log(answers);
})