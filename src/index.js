module.exports = function reverse (n) {
    return Math.sign(n) != -1 ? Number(n.toString().split('').reverse().join('')) : Number(n.toString().split('').map((item, index, arr) =>{
        return arr[arr.length - index];
      }).join(''));
}
