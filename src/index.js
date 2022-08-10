module.exports = function reverse (n) {
    let strN = String (Math.abs(n));
    let reverseStrN = '';

    for (let index = 0; index < strN.length; index++) {
        reverseStrN = `${strN[index]}${reverseStrN}`;
    }

    return Number (reverseStrN)
}
