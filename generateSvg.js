const { Triangle, Circle, Square, Shape } = require('./lib/shapes');

function generateSvg(answers) {

    const shape = new Shape(answers.letters, answers.colorText, answers.colorShape);

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
