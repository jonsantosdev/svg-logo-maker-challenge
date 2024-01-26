// const Circle = require('./circle');
// const Square = require('./square')
// const Triangle = require('./triangle');
const { Triangle, Circle, Square, Shape } = require('./lib/shapes');

function generateSvg(answers) {
// const { letters, colorText, shapes, colorShape } = answers;
    const shape = new Shape(answers.letters, answers.colorText, answers.colorShape);
    
//     const svgContent = `
//         <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//         <text x="50" y="50" fill="${answers.colorText}">${answers.letters}</text>
//         <rect x="100" y="50" width="100" height="100" fill="blue" />
//         </svg>
//     `;
    if (answers.shapes === "triangle") {
        const triangle = new Triangle(answers.letters, answers.colorText, answers.colorShape)
        shape.inputShape(triangle)
        
    }

    if (answers.shapes === "circle") {
        const circle = new Circle(answers.letters, answers.colorText, answers.colorShape)
        shape.inputShape(circle)
    }

    if (answers.shapes === "square") {
        const square = new Square(answers.letters, answers.colorText, answers.colorShape)
        shape.inputShape(square)
    }

    return shape.render();
}

module.exports = generateSvg;
