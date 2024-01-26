class Shape {
    constructor(letters, colorText, colorShape) {
      this.letters = letters;
      this.colorText = colorText;
      this.colorShape = colorShape;
      this.shape = '';
    }

    inputShape(newShape) {
      this.shape = newShape.render();
    }
    
    // Common method for rendering shape color
    render() {
      return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${this.shape}
      <text x="150" y="100" fill="${this.colorText}" text-anchor="middle" alignment-baseline="middle">${this.letters}</text>
      </svg>
      `;
    }
  }


  // Triangle class extends Shape
  class Triangle extends Shape {
    constructor(letters, colorText, colorShape) {
      super(letters, colorText, colorShape)
    }
    render() {
      return `<polygon points="150,50 100,150 200,150" fill="${this.colorShape}" />`;
    }
  }
  
  // Circle class extends Shape
  class Circle extends Shape {
    constructor(letters, colorText, colorShape) {
      super(letters, colorText, colorShape)
    }
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.colorShape}" />`;
    }
  }
  
  // Square class extends Shape
  class Square extends Shape {
    constructor(letters, colorText, colorShape) {
      super(letters, colorText, colorShape)
    }
    render() {
      return `<rect x="100" y="50" width="100" height="100" fill="${this.colorShape}" />`;
    }
  }
  

module.exports = { Shape, Triangle, Circle, Square };
  