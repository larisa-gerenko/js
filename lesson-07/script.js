// Задача 1

function currentTime() {
  let hours = new Date().getHours();

  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  const eHours = document.getElementById("hours");
  eHours.innerHTML = hours;
  eHours.style.color = "red";

  const eMinutes = document.getElementById("minutes");
  eMinutes.innerHTML = ": " + minutes;
  eMinutes.style.color = "blue";

  const eSeconds = document.getElementById("seconds");
  eSeconds.innerHTML = ": " + seconds;
  eSeconds.style.color = "green";
}

setInterval(currentTime, 1000);

// Задача 2

// let goods = [
//   {
//     title: "Стол",
//     photo: "img/table.jpg",
//     art: "N456",
//     description:
//       "Широкое сиденье и лаконичные формы сделали этот диван любимцем в семьях, где любят проводить время вместе или принимать гостей.",
//   },
//   {
//     title: "Шкаф",
//     photo: "img/closet.jpg",
//     art: "Y456",
//     description:
//       "Весомые преимущества модели – возможность трансформации в полноценное спальное место, простой и надежный механизм раскладывания и, конечно, демократичная цена!",
//   },
//   {
//     title: "Диван",
//     photo: "img/sofa.jpg",
//     art: " Z456",
//     description:
//       "Где любят проводить время вместе или принимать гостей. Весомые преимущества модели!",
//   },
// ];

// function createGoods(arr) {
//   let list = document.getElementById("goods");
//   list.innerHTML = "";

//   for (let i = 0; i <= arr.length; i++) {
//     let title = document.createElement("h2");
//     title.innerText = arr[i].title;

//     let photo = document.createElement("img");
//     photo.setAttribute("src", arr[i].photo);

//     let art = document.createElement("p");
//     art.innerText = "Артикул № " + arr[i].art;

//     let description = document.createElement("p");
//     description.innerText = arr[i].description;

//     let div = document.createElement("div");
//     div.appendChild(title);
//     div.appendChild(photo);
//     div.appendChild(art);
//     div.appendChild(description);
//     list.appendChild(div);
//   }
// }
// createGoods(goods);
