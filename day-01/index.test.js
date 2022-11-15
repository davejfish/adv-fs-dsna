const { reverseSentence, titleCase, oddishOrEvenish, at, fizzbuzz, multiplesOfN } = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });

    it('should capitalize first letter of each word, lowercase the rest', () => {
      expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
    });

    it('returns oddish or evenish based on all nums added together', () => {
      expect(oddishOrEvenish('121')).toEqual('Evenish');
      expect(oddishOrEvenish('41')).toEqual('Oddish');
    });

    it('returns the index, negative numbers work backwards', () => {
      expect(at(['a', 'b', 'c', 'd', 'e'], 1)).toEqual('b');
      expect(at(['a', 'b', 'c', 'd', 'e'], -2)).toEqual('d');
    });

    it('fizzbuzz', () => {
      expect(fizzbuzz(16)).toEqual([
        1, 2, 'Fizz', 4, 'Buzz', 
        'Fizz', 7, 8, 'Fizz', 'Buzz', 
        11, 'Fizz', 13, 14, 'FizzBuzz', 
        16
      ]);
    });

    it('return an arr of all nums multiples of n', () => {
      expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
      expect(multiplesOfN(25)).toEqual([25, 50]);
      expect(multiplesOfN(75)).toEqual([]);
    });

  });
});
