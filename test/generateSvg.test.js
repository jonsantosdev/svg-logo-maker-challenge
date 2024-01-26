const generateSvg = require("../generateSvg");
const inquirer = require('inquirer');

test('generateSvg returns valid SVG content', () => {
  const testAnswers = {
    letters: "ABC",
    colorText: "red",
    shapes: "circle",
    colorShape: "blue",
  };

  const svgContent = generateSvg(testAnswers);

  
  expect(svgContent).toContain('<svg');
  expect(svgContent).toContain('<circle');
  expect(svgContent).toContain('fill="blue"');
  
});

test('', () => {



});

test('', () => {



});