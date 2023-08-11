module.exports = function reverse (n) {
  function reverse(number) {
  const reversedString = String(number).split('').reverse().join('');
  return Number(reversedString);
}

module.exports = reverse;

}

console.log(reverse(123));    
console.log(reverse(233));    
console.log(reverse(535));    
console.log(reverse(95034));  
