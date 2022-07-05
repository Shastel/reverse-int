module.exports = function reverse (n) {
    if (n < 0) {
        n = Math.abs(n);
    }  
    let strNumber = String(n);
    let i = strNumber.length - 1;
    let result = '';
    while (i >= 0) {
      result = result + strNumber[i];
      i = i - 1;
    }
    let resultNumber = Number(result);
    return(resultNumber);
}
