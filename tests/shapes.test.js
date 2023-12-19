const { Square, Triangle, Circle } = require("../lib/shapes");

describe('Triangle', () => {
  test('should throw error if render() is called', () => {
    const shape = new Triangle();
    const err = new Error('Child class must implement a render() method.')
    expect(Triangle.render).toThrow(err);
  });
});
