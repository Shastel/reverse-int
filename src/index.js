module.exports = function reverse (n) {
  const numberToArray = n.toString().split('');
  const result = numberToArray.reverse().join('');

  return +result;
}
