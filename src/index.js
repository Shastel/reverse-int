module.exports = function reverse (n){
    const first = Math.abs(n)
    return  Number(first.toString().split('').reverse().join(''));
}
