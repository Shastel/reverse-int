module.exports = function reverse(n) {
    let rev_num = 0;
    let isNegative = n < 0;

    n = Math.abs(n);

    while (n > 0) {
        rev_num = rev_num * 10 + n % 10;
        n = Math.floor(n / 10);
    }

    return rev_num;
}
