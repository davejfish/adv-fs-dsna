function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCase(sentence) {
  const parts = sentence.split(' ');
  const result = parts.map(part => {
    const lc = part.toLowerCase();
    return lc[0].toUpperCase() + lc.slice(1);
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

module.exports = { reverseSentence, titleCase, oddishOrEvenish };
