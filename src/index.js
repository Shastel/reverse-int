module.exports = function reverse (n) {
    if (n >= 0) {
        let str = String(n);
        let reversStr = str.split("").reverse().join("");
        n = Number(reversStr);
        return n;
    } else {
        n = (-1)*n;
        let str = String(n);
        let reversStr = str.split("").reverse().join("");
        n = Number(reversStr);
        return n;
    };

}
