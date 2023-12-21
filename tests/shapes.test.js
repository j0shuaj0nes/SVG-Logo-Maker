const { Square, Triangle, Circle } = require("../lib/shapes");

describe('Triangle', () => {
  test('should throw error if render() is called', () => {
    const shape = new Triangle();
    const err = new Error('Child class must implement a render() method.')
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="${shape.shapeColour}" /> <text x="150" y="100" fill="${shape.textColour}">${shape.text}</text> </svg>`);
  });
});

describe('Square', () => {
   test('should throw error if render() is called', () => {
     const shape = new Square();
     const err = new Error('Child class must implement a render() method.')
     expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="200px" height="200px" fill="${shape.shapeColour}" /> <text x="150" y="100" fill="${shape.textColour}">${shape.text}</text> </svg>`);
   });
 });

 describe('Circle', () => {
   test('should throw error if render() is called', () => {
     const shape = new Circle();
     const err = new Error('Child class must implement a render() method.')
     expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${shape.shapeColour}" /> <text x="150" y="100" fill="${shape.textColour}">${shape.text}</text> </svg>`);
   });
 });