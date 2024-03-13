// <!-- Without using closure -->
// const red = document.getElementById("red");
// red.onclick = function () {
//   document.body.style.background = "red";
// };

// const green = document.getElementById("green");
// green.onclick = function () {
//   document.body.style.background = "green";
// };

// <!-- by using closure property -->

function ClickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}
document.getElementById("red").onclick = ClickHandler("red");
document.getElementById("green").onclick = ClickHandler("green");
