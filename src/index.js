module.exports = function reverse (n) {
    let result = '';
    let str = Math.abs(n).toString();
    let l = str.length;
    for (l; l > 0; l--) {
      result += str[l-1];
    }
    return result;
}
