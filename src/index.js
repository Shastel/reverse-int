module.exports = function reverse (n) {
    let reverseString = n;
    reverseString = n.toString().replace(/[^0-9]/g, '').split('').reverse().join('');
    return parseInt(reverseString);
     
}
