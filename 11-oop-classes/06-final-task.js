class Product {

  static count = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
    Product.count++;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value < 0) return;
    this._price = value;
  }

  describe() {
    return `${this.name}: $${this.price}`;
  }
}

class DiscountedProduct extends Product {
  constructor(name, price, discount) {
    super(name, price);
    this.discount = discount;
  }

  finalPrice() {
    return this.price - this.price * this.discount / 100;
  }
}

const iphone = new Product('Iphone', 49990);
const samsung = new Product('Samsung', 39900);

const huawei = new DiscountedProduct('Huawei', 29900, 30);
console.log(iphone.price);
iphone.price = -10000;
console.log(iphone.price);
console.log(huawei.describe());
console.log(huawei.finalPrice());
console.log(Product.count);
