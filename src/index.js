module.exports = function reverse (n) {
  let reverse = 0;
  while(n!=0){
    reverse = reverse * 0 + (n % 10);
    num = Math.floor(n/10)
  }
  return reverse;
}
