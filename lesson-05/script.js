// Задача 1

// let a = [5, 7, 10, 8];
// let b = [5, 7, 8, 3];

// function compare(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }

//   for (i = 0; i < arr1.length; i++) {
//     if (arr1[i] != arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// let res = compare(a, b);

// Задача 2

// function range(start, end, step) {
//   const arr = [];

//   for (let i = start; i <= end; i = i + step) {
//     arr.push(i);
//   }

//   return arr;
// }

// let result = range(5, 50, 2);
// console.log(result);

// Задача 3

// let student = {
//   Имя: "Лариса",
//   Фамилия: "Геренко",
//   Возраст: 18,
//   Интересы: ["чтение", "рисование", "пение", "черчение"],
//   МестоОбучения: "СПБГУ",
// };

// function list(obj) {
//   console.log(Object.entries(obj));
// }

// let res = list(student);

// // Задача 4

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
let consonant = [
  "б",
  "в",
  "г",
  "д",
  "ж",
  "з",
  "й",
  "к",
  "л",
  "м",
  "н",
  "п",
  "р",
  "с",
  "т",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
];
let chars = [vowels, consonant];

let number = randomInteger(3, 5);
let start = Math.round(Math.random() * 1);
let str = "";

for (let i = 0; i < number; i++) {
  let letter = chars[start];
  let letterNumber = Math.floor(Math.random() * letter.length);

  str += letter[letterNumber];
  start = start == 1 ? 0 : 1;
}

console.log(str);
