// Задача 1

// let str = "12345";
// let sum = 0;

// for (i = 0; i < str.length; i++) {
//   sum += Number(str[i]);
// }

// console.log(sum);

// Задача 2

// let str = "Лариса";
// let symbol = "а";

// str = str.replace(new RegExp(symbol, "g"), symbol + symbol);

// console.log(str);

// Задача 3

let password = "wertffffffffff444";

let search = password.match(/./gi);
let number = password.match(/\d/gi);

if (search.length >= 9) {
  if (/[a-z]/g.test(password)) {
    if (/[A-Z]/g.test(password)) {
      if (number.length > 2) {
        if (/\$|\#|\^|\%/.test(password)) {
          console.log("Введенный пароль удовлетворяет условиям сложности");
        } else {
          console.log(
            "Пароль должен содержать один из неалфавитных символов: $, #, %, ^"
          );
        }
      } else {
        console.log("Пароль должен содержать более двух цифр");
      }
    } else {
      console.log(
        "Пароль должен содержать английские буквы верхнего регистра;"
      );
    }
  } else {
    console.log("Пароль должен содержать английские буквы нижнего регистра;");
  }
} else {
  console.log("Пароль должен содержать от 9 символов");
}
