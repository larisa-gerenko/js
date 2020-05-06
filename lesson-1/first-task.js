let allSquare = 10;
let metrAllSquare = allSquare * 100; // Общая площадь в метрах
let garden = 15 * 25; // Площадь одной грядки
let amount = parseInt(metrAllSquare / garden); // Количество целых грядок
let freeSquare = metrAllSquare - amount * garden;
console.log(freeSquare);
