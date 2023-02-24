const n = 162;
module.exports = function reverse(n) {
    return (
      Math.abs(
        parseFloat(
        n
          .toString()
          .split('')
          .reverse()
          .join('')
        ) * Math.sign(n)
      )
    )                 
  }

