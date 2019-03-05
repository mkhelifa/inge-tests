const Interval = require('./interval');

describe('overlaps', function() {
  test.each([
    [new Interval(1, 3), new Interval(4, 7), false],
    [new Interval(2, 8), new Interval(3, 7), true],
    [new Interval(0, 8), new Interval(8, 10), false]
  ])('Overlaps %s', (inter1, inter2, expected) => {
    expect(inter1.overlaps(inter2)).toBe(expected);
  });
});
