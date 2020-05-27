// Задача 1

// let a = {
//   name: "static",
//   count: 0,
// };

// function foo(obj, id, number) {
//   const res = [];
//   for (let i = 0; i < number; i++) {
//     let copyObj = { ...obj };
//     copyObj[id] = i;
//     res.push(copyObj);
//   }
//   return res;
// }

// console.log(foo(a, "count", 10));

// Задача 2

// function createNumber() {
//   const numbers = [],
//     res = [];

//   for (let i = 1; i <= 100; i++) {
//     numbers.push(i);
//   }

//   return function () {
//     const index = Math.floor(Math.random() * numbers.length);
//     res.push(numbers[index]);
//     return numbers.splice(index, 1)[0];
//   };
// }

// let res = createNumber();

// console.log(res());
// console.log(res());
// console.log(res());
// console.log(res());

// Задача 3

// let student = {
//   name: "Иван",
//   surname: "Петров",
//   age: 21,
//   trainingPlace: "ИТМО",
//   interests: ["программирование", "музыка", "аниме"],

//   list() {
//     return (
//       this.name +
//       this.surname +
//       ". " +
//       this.age +
//       "год. " +
//       "Интересы: " +
//       this.interests +
//       "." +
//       " Учится в " +
//       this.trainingPlace
//     );
//   },
// };

// console.log(student.list());

// Задача 4

// let arr = [];

// function list(n) {
//   if (n > 0) {
//     arr.unshift(n);
//     list(n - 1);
//   }
// }

// list(5);

// let factorial = arr.reduce(function (a, b) {
//   return a + b;
// });
// console.log(factorial);

// Задача 5

let arr = [
  { price: 10, count: 2 },
  { price: 5, count: 5 },

  { price: 8, count: 5 },
  { price: 12, count: 4 },
  { price: 8, count: 4 },
];

arr.sort(function (obj1, obj2) {
  return obj1.price - obj2.price;
});

let obj = arr[0];
console.log(arr);
