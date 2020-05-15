// Задача 1

// let arrA = [12, 4, 3, 10, 1, 20];
// let arrB = [-3, -7, -100, -33];

// let arrC1 = arrB.concat(arrA);
// let arrC2 = arrA.concat(arrB);

// console.log(arrC1);
// console.log(arrC2);

// Задача 2
// let area = [null, null, 1, null, 1, null, 1, null, null];

// let table = "<table>";

// for (let i = 0; i < area.length; i++) {
//   let box = ".";

//   switch (area[i]) {
//     case 1:
//       box = "X";
//       break;
//     case 0:
//       box = "O";
//       break;
//   }

//   let z = i % 3;

//   if (!z) {
//     if (i != 0) {
//       table += "</tr>";
//     }
//     table += "<tr>";
//   }

//   table += `<td>${box}</td>`;

//   if (i + 1 == area.length) {
//     table += "</tr>";
//   }
// }

// table += "</table>";
// document.write(table);

// Задача 3

// let arr = [12, 4, 3, 10, 1, 20];

// function compare(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// arr.sort(compare);

// arr.pop();
// arr.shift();
// console.log(arr);

// Задача 4
let count = 0;

for (i = 1; i <= 999999; i++) {
  const ticket = i.toString().padStart(6, 0);
  const one = Number(ticket[0]) + Number(ticket[1]) + Number(ticket[2]);
  const two = Number(ticket[3]) + Number(ticket[4]) + Number(ticket[5]);

  if (one == two) {
    count++;
  }
}

console.log(count);
