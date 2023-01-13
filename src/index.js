module.exports = function reverse (n) {
    n = (n < 0 ? - n : n);
    let arr = Array.from(String(n));
    arr.reverse();
    let reversN = Number(arr.join(''));
    return (reversN);
}
