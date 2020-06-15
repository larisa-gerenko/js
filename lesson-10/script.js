// // Задача 1

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Basket() {
//   let products = [];
//   let amount = 0;

//   this.AddProduct = function (item) {
//     products.push(item);
//   };
//   this.GetAmount = function () {
//     let amounOfProduct = products.length;
//     return amounOfProduct;
//   };

//   this.GetSumm = function () {
//     let summ = 0;
//     for (let i = 0; i < products.length; i++) {
//       summ += products[i].price;
//     }
//     return summ;
//   };
// }

// let item1 = new Product("table", 10000);
// let item2 = new Product("sofa", 12000);
// let item3 = new Product("chair", 2000);
// let item4 = new Product("closet", 18000);

// let basket = new Basket();

// basket.AddProduct(item1);
// basket.AddProduct(item2);
// basket.AddProduct(item3);
// basket.AddProduct(item4);

// console.log(basket.GetAmount());
// console.log(basket.GetSumm());

// Задача 2

// function Human(name, age, gender, hobby) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
//   this.hobby = hobby;

//   this.humanDescription = function () {
//     return (
//       "Человек: " +
//       name +
//       " Возраст: " +
//       age +
//       " Пол: " +
//       gender +
//       " Интересы: " +
//       hobby
//     );
//   };
// }

// function Student(name, age, gender, hobby, university) {
//   Human.call(this, name, age, gender, hobby);
//   this.university = university;

//   this.studentDescription = function () {
//     return (
//       "Человек: " +
//       name +
//       " Возраст: " +
//       age +
//       " Пол: " +
//       gender +
//       " Интересы: " +
//       hobby +
//       " Обучается в: " +
//       university
//     );
//   };
// }

// let student = new Student("Иван", 20, "М", "музыка, танцы", "ИТМО");
// console.log(student.studentDescription());

// Задача 3

// function User() {
//   this.toString = function () {
//     return "Аноним";
//   };
// }

// User.new = function (data) {
//   const user = new User();
//   user.name = data.name;
//   user.age = data.age;

//   user.toString = function () {
//     return "Имя пользователя " + this.name + ", Возраст " + this.age;
//   };

//   return user;
// };

// const user1 = new User();
// const user2 = User.new({ name: "Вася", age: "34" });

// Задача 4

// 1) new Map([iterable])

// Объект Map итерируется в порядке вставки его элементов — цикл for...of будет возвращать массив [key, value] на каждой итерации.

// 2)  new Set([iterable]);

// Объекты Set представляют коллекции значений, по которым вы можете выполнить обход в порядке вставки элементов. Значение элемента в Set может присутствовать только в одном экземпляре, что обеспечивает его уникальность в коллекции Set.

// 3) Symbol([описание])

// Чтобы создать новый символьный примитив, достаточно написать Symbol(), указав по желанию строку в качестве описания этого символа.Map

// 4) new WeakMap([iterable])

// Ключами WeakMap могут быть только объекты. Примитивы в качестве ключей не допускаются (т.е. Symbol не может быть ключом WeakMap).

// 5)  new WeakSet([iterable]);

// Объекты WeakSet представляют собой коллекции объектов. Каждый объект в WeakSet встречается только один раз, что обеспечивает его уникальность в рамках коллекции WeakSet.

// 6)JSON является синтаксисом для сериализации объектов, массивов, чисел, строк логических значений и значения null.

// 7) Объект Promise (промис) используется для отложенных и асинхронных вычислений.

// 8)Метод eval() выполняет JavaScript код, представленный строкой.

// 9) Глобальная isFinite() функция определяет, является ли переданное значение конечным числом. Если необходимо, параметр сначала преобразуется в число.

// 10) Объект EvalError представляет ошибку, возникающую в глобальной функции eval().

// Задача 5

// function Course(name, teacher) {
//   this.teacher = teacher;
//   this.name = name;

//   this.showTeacherOfCourse = function () {
//     return teacher.name;
//   };
// }
// function Teacher(name) {
//   const students = [];
//   this.name = name;

//   this.AddStudent = function (surname) {
//     students.push(surname);
//   };

//   this.showAmountOfStudents = function () {
//     return students.length;
//   };
// }

// function Student(name) {
//   this.name = name;
// }

// let student1 = new Student("Иванов");
// let student2 = new Student("Зернов");
// let student3 = new Student("Крабов");

// let teacher1 = new Teacher("Смирнов Алексей Викторович");

// teacher1.AddStudent(student1);
// teacher1.AddStudent(student2);
// teacher1.AddStudent(student3);

// console.log(teacher1.showAmountOfStudents());

// let course1 = new Course("Химия", teacher1);

// console.log(course1.showTeacherOfCourse());
