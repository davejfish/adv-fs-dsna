const { reverseSentence, titleCase, oddishOrEvenish, at, fizzbuzz, multiplesOfN, equalSides, addPunctuation, repeat } = require('./index');

describe('primitive code challenges', () => {
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

  it('return index of arr where nums on the left = nums on the right', () => {
    expect(equalSides([1, 2, 3, 4, 3, 2, 1])).toEqual(3);
    expect(equalSides([1, 100, 50, -51, 1, 1])).toEqual(1);
    expect(equalSides([20, 10, -80, 10, 10, 15, 35])).toEqual(0);
  });
});

describe('higher order function code challenge', () => {
  it('should take a string and add !!! to the end of it', () => {
    const addExcitement = addPunctuation('!!!');
    expect(addExcitement('Hello World')).toBe('Hello World!!!');
    const addUnsure = addPunctuation('?!?');
    expect(addUnsure('What')).toBe('What?!?');
  });
});

describe('recursive code challenge question', () => {
  it('takes in a string and repeats it n times', () => {
    expect(repeat('ab', 3)).toEqual('ababab');
    expect(repeat('kiwi', 1)).toEqual('kiwi');
    expect(repeat('cherry', 2)).toEqual('cherrycherry');
  });
});
