function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCase(sentence) {
  const parts = sentence.split(' ');
  const result = parts.map(part => {
    return part[0].toUpperCase() + part.slice(1).toLowerCase();
  });
  return result.join(' ');
}

function oddishOrEvenish(number) {
  const nums = number.split('');
  const result = nums.reduce((acc, cur) => {
    return acc += parseInt(cur);
  }, 0);
  if (result % 2 === 0) return 'Evenish';
  return 'Oddish';
}

function at(arr, index) {
  if (index >= 0)
    return arr[index];
  const reversedArr = arr.reverse();
  const newIndex = Math.abs(index + 1);
  return reversedArr[newIndex];
}

function fizzbuzz(number) {
  const arr = [];

  for (let i = 1; i <= number; ++i) {
    if (i % 3 === 0 && i % 5 === 0)
      arr.push('FizzBuzz');
    else if (i % 3 === 0)
      arr.push('Fizz');
    else if (i % 5 === 0)
      arr.push('Buzz');
    else 
      arr.push(parseInt(i));
  }
  return arr;
}

function multiplesOfN(n) {
  const arr = [];
  for (let i = 1; i <= 50; ++i) {
    if (i % n === 0)
      arr.push(i);
  }
  return arr;
}

function equalSides(numbers) {
  let left = 0;
  let right = numbers.reduce((acc, cur) => acc + cur, 0);
  for (let i = 0; i < numbers.length; ++i) {
    right -= numbers[i];
    if (left === right)
      return i;
    left += numbers[i];
  }
  // if no answer
  return -1;
}

module.exports = { reverseSentence, titleCase, oddishOrEvenish, at, fizzbuzz, multiplesOfN, equalSides };
