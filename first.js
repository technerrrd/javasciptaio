/*
Instructions:

Include gamelet.js in an HTML document containing and element with an id of 'ball'
.
THe script will detect when the left or right arrow key is pressed and will move the ball element
*/
const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
let height = 0;
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position = position - 20;
  }
  if (e.code === "ArrowRight") {
    position = position + 20;
  }
  if (e.code === "ArrowDown") {
    height = height + 20;
  }
  if (e.code === "ArrowUp") {
    height = height - 20;
  }
  if (position < 0) {
    position = 0;
  }
  if (height < 0) {
    height = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = height + "px";
}
