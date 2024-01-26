const Shape = require('./shape');

class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="50" ${Shape.render()} />`;
    }
  }

module.exports = Circle;
