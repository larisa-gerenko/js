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
