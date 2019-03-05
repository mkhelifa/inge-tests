const Util = require('./math');

describe('Factorial', function() {
  test.each([[0, 1], [1, 1], [2, 2], [3, 6], [4, 24], [5, 120]])(
    'Factorial %i equals to %i',
    (n, expected) => {
      expect(Util.factorial(n)).toBe(expected);
    }
  );

  test('Factorial of negative integers throws exception', () => {
    expect(() => {
      Util.factorial(-10);
    }).toThrow();
  });

  test.each([[1, false], [2, true], [4, false], [5, true], [8, false]])(
    'isPrime(%i)',
    (n, expected) => {
      expect(Util.isPrime(n)).toBe(expected);
    }
  );

  test.each([[6, 10], [8, 17]])('sumPrime(%i) = %i', (n, expected) => {
    expect(Util.sumPrime(n)).toBe(expected);
  });

  test.each([
    [
      15,
      [
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz'
      ]
    ]
  ])('fizzbuzz (%i)', (n, expected) => {
    expect(Util.fizzBuzz(n)).toBe(expected);
  });
});
