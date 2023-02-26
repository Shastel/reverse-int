module.exports = function reverse (n) {
   stringN = n.toString().split('').reverse().join('');
   return parseFloat(stringN);
}
