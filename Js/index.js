window.onload = function () {
  allCheckboxes = document.querySelectorAll("input[type=checkbox]");
  for (let i = 0; i < allCheckboxes.length; i++) {
    allCheckboxes[i].checked = false;
  }
};

range1.oninput = function () {
  let val = document.getElementById("range1").value;
  let textplace = document.getElementById("textplace1");
  if (val <= 9) {
    textplace.value = "00" + val;
  } else if (val <= 99) {
    textplace.value = "0" + val;
  } else {
    textplace.value = val;
  }
};
range2.oninput = function () {
  let val = document.getElementById("range2").value;
  let textplace = document.getElementById("textplace2");
  if (val <= 9) {
    textplace.value = "00" + val;
  } else if (val <= 99) {
    textplace.value = "0" + val;
  } else {
    textplace.value = val;
  }
};
range3.oninput = function () {
  let val = document.getElementById("range3").value;
  let textplace = document.getElementById("textplace3");
  if (val <= 9) {
    textplace.value = "0" + val;
  } else {
    textplace.value = val;
  }
};
range4.oninput = function () {
  let val = document.getElementById("range4").value;
  let textplace = document.getElementById("textplace4");
  if (val <= 9) {
    textplace.value = "0" + val;
  } else {
    textplace.value = val;
  }
};
ProgressRange.oninput = function () {
  let val = document.getElementById("ProgressRange").value;
  let textplace = document.getElementById("progress");
  textplace.value = val;
};

let flexSort = document.getElementById("flex-sort");
let flag = 1;

flexSort.onclick = function () {
  const allFlexItems = document.querySelectorAll("div[class *= flex-item]");
  const flexItems = Array.from(allFlexItems);
  flexItems.sort(function (a, b) {
    return (
      parseInt(window.getComputedStyle(b).getPropertyValue("height")) -
      parseInt(window.getComputedStyle(a).getPropertyValue("height"))
    );
  });
  if (flag === 1) {
    for (let i = 1; i < flexItems.length; i++) {
      flexItems[i].style.order = i;
    }
    flexSort.innerText = "Unsort flex containers";
    flag = 0;
  } else {
    for (let i = 1; i < flexItems.length; i++) {
      flexItems[i].style.order = "";
    }
    flexSort.innerText = "Sort flex containers";
    flag = 1;
  }
};

const hoverToggle = document.getElementById("toggle-hover");
const allWrapDivs = document.querySelectorAll("div[class *= wrap]");
const wrapDivs = Array.from(allWrapDivs);

hoverToggle.onclick = function () {
  for (let i = 0; i < wrapDivs.length; i++) {
    if (wrapDivs[i].classList.contains("non-hover")) {
      wrapDivs[i].classList.remove("non-hover");
    } else {
      wrapDivs[i].classList.add("non-hover");
    }
  }
};

const gridCell = Array.from(document.querySelectorAll("div[class *= grid-cell]"));
for (let i = 0; i < gridCell.length; i++) {
  gridCell[i].addEventListener("mouseover", function () {
    let color =
      parseInt(Math.floor(Math.random() * (255 - 0) + 0), 10).toString(16) +
      parseInt(Math.floor(Math.random() * (255 - 0) + 0), 10).toString(16) +
      parseInt(Math.floor(Math.random() * (255 - 0) + 0), 10).toString(16);
    gridCell[i].style.background = "#" + color;
  });
}
