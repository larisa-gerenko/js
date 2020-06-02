import { searchMin, searchMax, cloneFirstLevel, ArAverage } from "./arr.js";

let arr = [1, 2, 3, 4, 5, 6];

console.log(searchMin(arr));
console.log(searchMax(arr));
console.log(ArAverage(arr));

let obj = {
  name: "Иван",
  age: 21,
};

console.log(cloneFirstLevel(obj));
