// function drag(ev) {
//   console.log(ev);
// }

// const collection = document.getElementsByClassName("empty");
// const emptyPuzzle = collection[0];

document.addEventListener("dragend", function (ev) {
  console.log(ev);
});
document.addEventListener("drop", function (event) {
  event.preventDefault();
  console.log(event);
});
