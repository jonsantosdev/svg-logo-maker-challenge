const inquirer = require("inquirer");
const fs = require("fs");
const generateSvg = require("./generateSvg");

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
        name: "shapes",
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
    // const dataToWrite = JSON.stringify(answers, null, 2);
    const svgFile = generateSvg(answers);

    fs.writeFile("logo.svg", svgFile, (err) =>
        err ? console.log(err) : console.log("Generated logo.svg")
    );
})