const img = [
  "https://media.gettyimages.com/photos/cat-headphones-wearing-sunglasses-relaxing-in-the-grass-picture-id512291806?s=2048x2048",
  "https://media.gettyimages.com/vectors/cute-cartoon-dachshunds-in-love-vector-id865392634?s=2048x2048",
  "https://media.gettyimages.com/vectors/heart-shaped-sea-otters-in-love-vector-graphics-vector-id1183276814?s=2048x2048",
  "https://media.gettyimages.com/vectors/funny-no-prob-llama-vector-illustration-vector-id1089951888?s=2048x2048",
  "https://media.gettyimages.com/vectors/cute-sloth-sitting-in-lotus-yoga-pose-cartoon-sloth-bear-vector-vector-id1076571820?s=2048x2048",
  "https://media.gettyimages.com/vectors/hand-drawing-hipster-fantasy-animal-unicorn-illustration-vector-id1065322868?s=2048x2048",
];

let root = document.documentElement;
root.style.setProperty(
  "--image",
  "url(" + img[(Math.random() * img.length) | 0] + ")"
);

let dragged = null;

document.addEventListener("dragstart", function (event) {
  console.log(event);
  dragged = event.target;
});

//Включаем события по сбрасыванию элемента
document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  const dropped = event.target;
  if (dropped.className == dragged.className) {
    dropped.className += " show";
    dragged.className += " hide";
    console.log(event);
  }
});

let draggableElements = document.querySelector(".draggable");
for (var i = draggableElements.children.length; i >= 0; i--) {
  draggableElements.appendChild(
    draggableElements.children[(Math.random() * i) | 0]
  );
}
console.log(draggableElements);
