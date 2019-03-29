var progressBar = 0;

function zeros() {
    document.getElementById("result").innerHTML = " ";
    progressBar = 0;
    var xfour = parseInt(document.getElementById("x^4").value, 10);
    var xthree = parseInt(document.getElementById("x^3").value, 10);
    var xtwo = parseInt(document.getElementById("x^2").value, 10);
    var xone = parseInt(document.getElementById("x^1").value, 10);
    var xzero = parseInt(document.getElementById("x^0").value, 10);

    var dxthree = xfour * 4;
    var dxtwo = xthree * 3;
    var dxone = xtwo * 2;
    var dxzero = xone;

    var xminimum = parseInt(document.getElementById("xmin").value, 10);
    var xmaximum = parseInt(document.getElementById("xmax").value, 10);

    var x = 0;



    var zerosArray = [];

    var numerator = xfour * Math.pow(x, 4) + xthree * Math.pow(x, 3) + xtwo * Math.pow(x, 2) + xone * x + xzero;
    var denominator =
        dxthree * Math.pow(x, 3) + dxtwo * Math.pow(x, 2) + dxone * x + dxzero;
    for (var j = xminimum; j < xmaximum; j += 0.1) {
        x = j;

        // progressBar += (100 / (Math.abs(xminimum) + Math.abs(xmaximum)));
        // document.getElementById("progress").innerHTML = (progressBar * 0.1) + '%';
        // console.log(progressBar);

        numerator = xfour * Math.pow(x, 4) + xthree * Math.pow(x, 3) + xtwo * Math.pow(x, 2) + xone * x + xzero;
        denominator = dxthree * Math.pow(x, 3) + dxtwo * Math.pow(x, 2) + dxone * x + dxzero;
        for (var i = 0; i < 500; i++) {
            x -= numerator / denominator;
            document.getElementById("result").innerHTML = x;
            numerator = xfour * Math.pow(x, 4) + xthree * Math.pow(x, 3) + xtwo * Math.pow(x, 2) + xone * x + xzero;
            denominator = dxthree * Math.pow(x, 3) + dxtwo * Math.pow(x, 2) + dxone * x + dxzero;
        }

        if (!Math.round(1000 * (xfour * Math.pow(x, 4) + xthree * Math.pow(x, 3) + xtwo * Math.pow(x, 2) + xone * x + xzero)) / 1000 == 0) {
            document.getElementById("result").innerHTML = "No Real Zeros";
            break;
        } else {
            for (var g = 0; g < zerosArray.length; g++) {
                if (Math.round(1000 * x) / 1000 == Math.round(1000 * zerosArray[g]) / 1000) {
                    var repeat = true;
                }
            }
            if (!repeat) {
                zerosArray.push(x);
            }
        }
        repeat = false;
        // document.getElementById("progress").innerHTML = (progressBar * 0.1) + '%';
    }

    for (var g = 0; g < zerosArray.length - 1; g++) {
        // console.log("j");
        document.getElementById("result").value += zerosArray[g] + "///n";
        // var linebreak = document.createElement("br");
        // document.getElementById("result").appendChild(linebreak);
    }

}