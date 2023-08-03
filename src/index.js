module.exports = function reverse (n) {
  let reverseString = toString(n).split('').reverse().join('');
  return Number(reverseString)
}
