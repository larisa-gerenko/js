// Задача 1

// let January = "1",
//   February = "2",
//   March = "3",
//   April = "4",
//   May = "5",
//   June = "6",
//   July = "7",
//   August = "8",
//   September = "9",
//   October = "10",
//   November = "11",
//   December = "12";
// let month = prompt("Введите номер месяца");
// if (month === "12" || month === "1" || month === "2") {
//   alert("Время года - зима!");
// } else if (month === "3" || month === "4" || month === "5") {
//   alert("Время года - весна!");
// } else if (month === "6" || month === "7" || month === "8") {
//   alert("Время года - лето!");
// } else if (month === "9" || month === "10" || month === "11") {
//   alert("Время года - осень!");
// } else {
//   alert("Вы ввели неверный номер!");
// }

// Задача 2

let dm = "1",
  km = "2",
  metr = "3",
  mm = "4",
  sm = "5";
let unit = prompt("Введите номер единицы измерения?");
let length = prompt("Введите длину отрезка");

let calc;

switch (unit) {
  case "1":
    calc = length * 10;
    break;
  case "2":
    calc = length * 1000;
    break;
  case "3":
    calc = length;
    break;
  case "4":
    (calc = length * 0), 01;
    break;
  case "5":
    (calc = length * 0), 1;
    break;
  default:
    alert("Вы ввели неправильное значение");
}
alert("Длина отрезка " + length * 10);
