window.onload = function () {
    const allCubes = document.querySelectorAll('div[id *= cube]');
    const allRanges = document.querySelectorAll('input[type=range]');
    const cubes = Array.from(allCubes);
    const ranges = Array.from(allRanges);
    for (let i = 0; i < 9; i++) {
        if (i <= 2) {
            cubes[i].style.backgroundColor = "#000";
        }
        ranges[i].value = "0";
    }
}

let r1 = document.querySelector('#red1'),
    g1 = document.querySelector('#green1'),
    b1 = document.querySelector('#blue1'),
    r2 = document.querySelector('#red2'),
    g2 = document.querySelector('#green2'),
    b2 = document.querySelector('#blue2'),
    r3 = document.querySelector('#red3'),
    g3 = document.querySelector('#green3'),
    b3 = document.querySelector('#blue3'),
    outputR1 = document.querySelector('#outputR1'),
    outputG1 = document.querySelector('#outputG1'),
    outputB1 = document.querySelector('#outputB1'),
    outputR2 = document.querySelector('#outputR2'),
    outputG2 = document.querySelector('#outputG2'),
    outputB2 = document.querySelector('#outputB2'),
    outputR3 = document.querySelector('#outputR3'),
    outputG3 = document.querySelector('#outputG3'),
    outputB3 = document.querySelector('#outputB3');

function pad(n) {
    return (n.length < 2) ? "0" + n : n;
}

r1.oninput = function () {
    let r = document.getElementById("red1").value,
        g = document.getElementById("green1").value,
        b = document.getElementById("blue1").value,
        cube = document.getElementById("cubeOne"),
        r_hexVal = parseInt(r, 10).toString(16),
        g_hexVal = parseInt(g, 10).toString(16),
        b_hexVal = parseInt(b, 10).toString(16),
        hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
    cube.style.backgroundColor = hexVal;
    outputR1.value = r;
}
g1.oninput = function () {
    let r = document.getElementById("red1").value,
        g = document.getElementById("green1").value,
        b = document.getElementById("blue1").value,
        cube = document.getElementById("cubeOne"),
        r_hexVal = parseInt(r, 10).toString(16),
        g_hexVal = parseInt(g, 10).toString(16),
        b_hexVal = parseInt(b, 10).toString(16),
        hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
    cube.style.backgroundColor = hexVal;
    outputG1.value = g;
}
b1.oninput = function () {
    let r = document.getElementById("red1").value,
        g = document.getElementById("green1").value,
        b = document.getElementById("blue1").value,
        cube = document.getElementById("cubeOne"),
        textplace = document.getElementById("textplace1"),
        r_hexVal = parseInt(r, 10).toString(16),
        g_hexVal = parseInt(g, 10).toString(16),
        b_hexVal = parseInt(b, 10).toString(16),
        hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
    cube.style.backgroundColor = hexVal;
    outputB1.value = b;
}
r2.oninput = function () {
    let r = document.getElementById("red2").value,
        g = document.getElementById("green2").value,
        b = document.getElementById("blue2").value,
        cube = document.getElementById("cubeTwo"),
        r_hexVal = parseInt(r, 10).toString(16),
        g_hexVal = parseInt(g, 10).toString(16),
        b_hexVal = parseInt(b, 10).toString(16),
        hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
    cube.style.backgroundColor = hexVal;
    outputR2.value = r;
}
g2.oninput = function () {
    let r = document.getElementById("red2").value,
        g = document.getElementById("green2").value,
        b = document.getElementById("blue2").value,
        cube = document.getElementById("cubeTwo"),
        r_hexVal = parseInt(r, 10).toString(16),
        g_hexVal = parseInt(g, 10).toString(16),
        b_hexVal = parseInt(b, 10).toString(16),
        hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
    cube.style.backgroundColor = hexVal;
    outputG2.value = g;
}
b2.oninput = function () {
    let r = document.getElementById("red2").value,
        g = document.getElementById("green2").value,
        b = document.getElementById("blue2").value,
        cube = document.getElementById("cubeTwo"),
        r_hexVal = parseInt(r, 10).toString(16),
        g_hexVal = parseInt(g, 10).toString(16),
        b_hexVal = parseInt(b, 10).toString(16),
        hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
    cube.style.backgroundColor = hexVal;
    outputB2.value = b;
}

r3.oninput = function () {
    let r = document.getElementById("red3").value,
        g = document.getElementById("green3").value,
        b = document.getElementById("blue3").value,
        cube = document.getElementById("cubeThree"),
        r_hexVal = parseInt(r, 10).toString(16),
        g_hexVal = parseInt(g, 10).toString(16),
        b_hexVal = parseInt(b, 10).toString(16),
        hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
    cube.style.backgroundColor = hexVal;
    outputR3.value = r;
}
g3.oninput = function () {
    let r = document.getElementById("red3").value,
        g = document.getElementById("green3").value,
        b = document.getElementById("blue3").value,
        cube = document.getElementById("cubeThree"),
        r_hexVal = parseInt(r, 10).toString(16),
        g_hexVal = parseInt(g, 10).toString(16),
        b_hexVal = parseInt(b, 10).toString(16),
        hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
    cube.style.backgroundColor = hexVal;
    outputG3.value = g;
}
b3.oninput = function () {
    let r = document.getElementById("red3").value,
        g = document.getElementById("green3").value,
        b = document.getElementById("blue3").value,
        cube = document.getElementById("cubeThree"),
        r_hexVal = parseInt(r, 10).toString(16),
        g_hexVal = parseInt(g, 10).toString(16),
        b_hexVal = parseInt(b, 10).toString(16),
        hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
    cube.style.backgroundColor = hexVal;
    outputB3.value = b;
}