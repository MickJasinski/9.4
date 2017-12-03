function drawTree(x) {
    for (var i = 0; i < x; i++) {
        var star = "";
        for (var j = 0; j < (x - i); j++) {
        	star += " ";
        }
        for (var k = 0 ; k <= i * 2 ; k++) {
        	star += "*";
        }
        console.log(star);
    }
}
console.log(drawTree(3));
