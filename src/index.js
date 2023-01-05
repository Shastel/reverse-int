module.exports = function reverse (n) {
  const numberToArray = Math.abs(n).toString().split('');
  const result = numberToArray.reverse().join('');

  return +result;
}
