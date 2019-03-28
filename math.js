function zeros() {
    var xfour = parseInt(document.getElementById("x^4").value, 10);
    var xthree = parseInt(document.getElementById("x^3").value, 10);
    var xtwo = parseInt(document.getElementById("x^2").value, 10);
    var xone = parseInt(document.getElementById("x^1").value, 10);
    var xzero = parseInt(document.getElementById("x^0").value, 10);

    var dxthree = xfour * 4;
    var dxtwo = xthree * 3;
    var dxone = xtwo * 2;
    var dxzero = xone;

    var x = parseInt(document.getElementById("x").value, 10);

    var numerator = (xfour * Math.pow(x, 4)) + (xthree * Math.pow(x, 3)) + (xtwo * Math.pow(x, 2)) + (xone * x) + xzero
    var denominator = (dxthree * Math.pow(x, 3)) + (dxtwo * Math.pow(x, 2)) + (dxone * x) + dxzero

    for (var i = 0; i < 10000; i++) {
        x -= numerator / denominator
        document.getElementById("result").innerHTML = x;
        numerator = (xfour * Math.pow(x, 4)) + (xthree * Math.pow(x, 3)) + (xtwo * Math.pow(x, 2)) + (xone * x) + xzero
        denominator = (dxthree * Math.pow(x, 3)) + (dxtwo * Math.pow(x, 2)) + (dxone * x) + dxzero
    }

    if (!Math.round(1000 * ((xfour * Math.pow(x, 4)) + (xthree * Math.pow(x, 3)) + (xtwo * Math.pow(x, 2)) + (xone * x) + xzero)) / 1000 == 0) {
        document.getElementById("result").innerHTML = "No Real Zeros :(";
    }
}
