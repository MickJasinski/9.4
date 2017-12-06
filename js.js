function drawTree(numberOfLines) {
    for (var i = 0; i < numberOfLines; i++) {
        var star = "";
        for (var j = 0; j < (numberOfLines - i); j++) {
        	star += " ";
        }
        for (var k = 0; k <= i * 2; k++) {
        	star += "*";
        }
        console.log(star);
    }
}

drawTree(7);