// Задача 1

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Basket() {
  let products = [];
  let amount = 0;

  this.AddProduct = function (item) {
    products.push(item);
  };
  this.GetAmount = function () {
    let amounOfProduct = products.length;
    return amounOfProduct;
  };

  this.GetSumm = function () {
    let summ = 0;
    for (let i = 0; i < products.length; i++) {
      summ += products[i].price;
    }
    return summ;
  };
}

let item1 = new Product("table", 10000);
let item2 = new Product("sofa", 12000);
let item3 = new Product("chair", 2000);
let item4 = new Product("closet", 18000);

let basket = new Basket();

basket.AddProduct(item1);
basket.AddProduct(item2);
basket.AddProduct(item3);
basket.AddProduct(item4);

console.log(basket.GetAmount());
console.log(basket.GetSumm());

// Задача 2
