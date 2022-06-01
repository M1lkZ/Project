let block = document.getElementById("block")
let range = document.getElementById("range")

range.oninput = function () {
    string_val = parseInt(range.value, 10).toString(10)
    text = string_val + "%"
    block.style.width = text
    block.style.height = text
}