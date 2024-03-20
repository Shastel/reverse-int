module.exports = function reverse(n) {
    if (n > 0) {
        return res = String(n).split('').reverse().join('')
    } else {
        return res = String(n).split('').reverse().join('').replace('-', '')
    }
}
