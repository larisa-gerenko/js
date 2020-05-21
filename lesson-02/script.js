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

// let dm = "1",
//   km = "2",
//   metr = "3",
//   mm = "4",
//   sm = "5";
// let unit = prompt("Введите номер единицы измерения?");
// let length = prompt("Введите длину отрезка");

// let calc;

// switch (unit) {
//   case "1":
//     calc = length * 0.1;
//     break;
//   case "2":
//     calc = length * 1000;
//     break;
//   case "3":
//     calc = +length;
//     break;
//   case "4":
//     calc = length * 0.001;
//     break;
//   case "5":
//     calc = length * 0.01;
//     break;
//   default:
//     alert("Вы ввели неправильное значение");
// }
// alert(`Длина отрезка ${+calc.toFixed(3)} м`);

// //Задача 3

// let number = prompt("Введите число от -999 до 999");

// if (number <= -100) {
//   alert("Отрицательное трехзначное число");
// } else if (number <= -10 && number > -100) {
//   alert("Отрицательное двузначное число");
// } else if (number < 0 && number > -10) {
//   alert("Отрицательное однозначное число");
// } else if (number == 0) {
//   alert("Нулевое число");
// } else if (number > 0 && number < 10) {
//   alert("Положительное однозначное число");
// } else if (number >= 10 && number <= 99) {
//   alert("Положительное двузначное число");
// } else if (number >= 100) {
//   alert("Положительное трехзначное  число");
// } else {
//   alert("Вы ввели неверное число");
// }

// Задача 4

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FiveThree");
  } else if (i % 5 == 0) {
    console.log("Five");
  } else if (i % 3 == 0) {
    console.log("Three");
  } else {
    console.log(i);
  }
}

// Задача 5

// let i = prompt("Введите год");

// if (i % 4 == 0) {
//   if (i % 100 == 0) {
//     if (i % 400 == 0) {
//       alert("Високосный год");
//     } else {
//       alert("Невисокосный год");
//     }
//   } else {
//     alert("Високосный год");
//   }
// } else if (i <= 0) {
//   alert("Введите положительное число");
// } else {
//   alert("Невисокосный год");
// }

// Задача 6

// let plate = prompt("Введите количество тарелок");
// let wash = prompt("Введите количество моющего средства");

// for (; plate > 0; plate--) {
//   if (wash === 0) {
//     break;
//   }
//   wash = wash - 0.5;
//   alert("Остаток моющего средства: " + wash);
// }

// alert("Осталось тарелок: " + plate + " Остаток моющего средства: " + wash);
