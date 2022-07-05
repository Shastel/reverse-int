module.exports = function reverse (n) {
    var str = n.toString();
    var index;
	var ret="";
	for (index = str.length - 1; index >= 0; --index) {
        ret+=str.charAt(index);
	}
    var rez = parseInt(ret);
	//console.log(rez);
    return rez;
}
