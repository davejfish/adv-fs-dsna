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

module.exports = { reverseSentence, titleCase };
