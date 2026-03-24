function setfocus() {
    document.getElementById("x").focus();
}

function calc() {
    let x = parseFloat(document.getElementById("x").value);

    if (isNaN(x)) {
        document.getElementById("y").value = "Invalid input";
        return;
    }

    let func = document.getElementById("func").value;
    let y;

    if (func === "sin") y = Math.sin(x);
    else if (func === "cos") y = Math.cos(x);
    else if (func === "tan") y = Math.tan(x);
    else if (func === "csc") y = 1 / Math.sin(x);
    else if (func === "sec") y = 1 / Math.cos(x);
    else if (func === "cot") y = 1 / Math.tan(x);

    y = roundresult(y);
    document.getElementById("y").value = y;
}

function calc_a() {
    let x = parseFloat(document.getElementById("x").value);
    let y = calcfunc_a(x);
    y = roundresult(y);
    document.getElementById("y").value = y;
}


function str2num(s) {
    s = s.toString().trim().replace(/(\d)(\s+)(?=\d)/gm, "$1+").replace(/[^-()\d/*+.]/g, '');
    if (s == '') return 0;
    return Function('"use strict";return (' + s + ')')();
}

function roundresult(x) {
    let y = parseFloat(x);
    y = roundnum(y, 10);
    return y;
}

function roundnum(x, p) {
    var i;
    var n = parseFloat(x);
    var m = n.toPrecision(p + 1);
    var y = String(m);
    i = y.indexOf('e');
    if (i == -1) i = y.length;
    let j = y.indexOf('.');
    if (i > j && j != -1) {
        while (i > 0) {
            if (y.charAt(--i) == '0')
                y = removeAt(y, i);
            else
                break;
        }
        if (y.charAt(i) == '.')
            y = removeAt(y, i);
    }
    return y;
}

function roundnum2(x, p) {
    var i;
    var n = parseFloat(x);
    var m = n.toFixed(p);
    var y = String(m);
    i = y.length;
    let j = y.indexOf('.');
    if (i > j && j != -1) {
        while (i > 0) {
            if (y.charAt(--i) == '0')
                y = removeAt(y, i);
            else
                break;
        }
        if (y.charAt(i) == '.')
            y = removeAt(y, i);
    }
    return y;
}

function removeAt(s, i) {
    s = s.substring(0, i) + s.substring(i + 1, s.length);
    return s;
}
var gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};
