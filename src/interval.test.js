const Interval = require('./interval');

describe('overlaps', function() {
  test.each([
    [new Interval(1, 3), new Interval(4, 7), false],
    [new Interval(2, 8), new Interval(3, 7), true],
    [new Interval(0, 8), new Interval(8, 10), false]
  ])('Overlaps %s &  %s', (inter1, inter2, expected) => {
    expect(inter1.overlaps(inter2)).toBe(expected);
  });
});

describe('includes', function() {
  test.each([
    [new Interval(1, 3), new Interval(4, 7), false],
    [new Interval(2, 8), new Interval(3, 7), true],
    [new Interval(0, 8), new Interval(8, 10), false]
  ])('Includes %s %s', (inter1, inter2, expected) => {
    expect(inter1.includes(inter2)).toBe(expected);
  });
});

describe('union', function() {
  test.each([
    [
      new Interval(1, 3),
      new Interval(4, 7),
      [new Interval(1, 3), new Interval(4, 7)]
    ],
    [new Interval(2, 8), new Interval(3, 7), [new Interval(2, 8)]],
    [
      new Interval(0, 8),
      new Interval(8, 10),
      [new Interval(0, 8), new Interval(8, 10)]
    ]
  ])('%s U %s', (inter1, inter2, expected) => {
    expect(inter1.union(inter2)).toEqual(expected);
  });
});
