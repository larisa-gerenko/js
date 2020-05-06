// Первая задача

/* let allSquare = 10;
let metrAllSquare = allSquare * 100; // Общая площадь в метрах
let garden = 15 * 25; // Площадь одной грядки
let amount = parseInt(metrAllSquare / garden); // Количество целых грядок
let freeSquare = metrAllSquare - amount * garden;
console.log(freeSquare); */

//Вторая задача

// let sm = 15 * 100; // Общая площадь в см2
// let buzy = 600;
// let free = sm - buzy;
// console.log(free); // Площадь остатка

// Третья задача

// let one = 5,
//   two = 7,
//   three = 8;
// let answer = Math.min(one, two, three);

// Четвертая задача

// let number = 50;
// let x = 14;
// let y = 156;

// if (Math.abs(x - number) > Math.abs(y - number)) {
//   alert("Ближайшее к заданному числу: " + y);
// } else if (Math.abs(x - number) < Math.abs(y - number)) {
//   alert("Ближайшее к заданному числу: " + x);
// } else {
//   alert("Оба числа на одинаковом отдалении");
// }

// Пятая задача

let Ax, Ay, Az, Bx, By, Bz, Cx, Cy, Cz;
let AB = (Bx - Ax) ** 2 + (By - Ay) ** 2 + (Bz - Az) ** 2;
let AC = (Cx - Ax) ** 2 + (Cy - Ay) ** 2 + (Cz - Az) ** 2;
let BC = (Cx - Bx) ** 2 + (Cy - By) ** 2 + (Cz - Bz) ** 2;

if (AB > AC && AB > BC && AB == AC + BC) {
  alert("Прямоугольник является прямоугольным");
} else if (AC > AB && AC > BC && AC == AB + BC) {
  alert("Прямоугольник является прямоугольным");
} else if (BC > AB && BC > AC && BC == AB + AC) {
  alert("Прямоугольник является прямоугольным");
} else {
  alert("Прямоугольник не является прямоугольным");
}
