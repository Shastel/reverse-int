module.exports = function reverse(n) {
    let reversChar = String(n).split("").reverse().join("");
    if (n > 0) {
        return reversChar;
    }
    else {
        return reversChar.substring(0, reversChar.length - 1);
    }
}
