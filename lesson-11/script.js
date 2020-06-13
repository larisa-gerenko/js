// Задача 1

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Basket() {
//   this.products = [];
// }

// Basket.prototype.addProduct = function (item) {
//   this.products.push(item);
// };

// Basket.prototype.getAmount = function () {
//   return this.products.length;
// };

// Basket.prototype.getSumm = function () {
//   let summ = 0;
//   for (let i = 0; i < this.products.length; i++) {
//     summ += this.products[i].price;
//   }
//   return summ;
// };

// let item1 = new Product("table", 10000);
// let item2 = new Product("sofa", 12000);
// let item3 = new Product("chair", 2000);
// let item4 = new Product("closet", 18000);

// let basket = new Basket();
// basket.addProduct(item1);
// basket.addProduct(item2);
// basket.addProduct(item3);
// basket.addProduct(item4);

// console.log(basket.getAmount());
// console.log(basket.getSumm());

// Задача 2

function Human(name, age, gender, hobby) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.hobby = hobby;
}

Human.prototype.getDescription = function () {
  return (
    "Человек: " +
    this.name +
    " Возраст: " +
    this.age +
    " Пол: " +
    this.gender +
    " Интересы: " +
    this.hobby
  );
};

function Student(name, age, gender, hobby, university) {
  Human.call(this, name, age, gender, hobby);
  this.university = university;
}

Student.prototype.getDescription = function () {
  return (
    "Человек: " +
    this.name +
    " Возраст: " +
    this.age +
    " Пол: " +
    this.gender +
    " Интересы: " +
    this.hobby +
    " Обучается в: " +
    this.university
  );
};
Student.prototype.__proto__ = Human.prototype;

let student = new Student("Иван", 20, "М", "музыка, танцы", "ИТМО");
console.log(student.getDescription());
