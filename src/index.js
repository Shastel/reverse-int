module.exports = function reverse (n) {
    n = n + '';
    let x  = n.split('').filter(x=>Number.isInteger(x/1)).reverse().join("");
    return x;
}
