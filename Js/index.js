range1.oninput = function () {
    let val = document.getElementById("range1").value
    let textplace = document.getElementById("textplace1")
    if (val <= 9) {
        textplace.value = "00" + val
    } else if (val <= 99) {
        textplace.value = "0" + val
    } else {
        textplace.value = val
    }
}
range2.oninput = function () {
    let val = document.getElementById("range2").value
    let textplace = document.getElementById("textplace2")
    if (val <= 9) {
        textplace.value = "00" + val
    } else if (val <= 99) {
        textplace.value = "0" + val
    } else {
        textplace.value = val
    }
}
range3.oninput = function () {
    let val = document.getElementById("range3").value
    let textplace = document.getElementById("textplace3")
    if (val <= 9) {
        textplace.value = "0" + val
    } else {
        textplace.value = val
    }
}
range4.oninput = function () {
    let val = document.getElementById("range4").value
    let textplace = document.getElementById("textplace4")
    if (val <= 9) {
        textplace.value = "0" + val
    } else {
        textplace.value = val
    }
}
ProgressRange.oninput = function () {
    let val = document.getElementById("ProgressRange").value
    let textplace = document.getElementById("progress")
    textplace.value = val
}