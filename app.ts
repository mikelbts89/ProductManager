class Product {
  name: string;
  price: number;
  weight: number;
  kosher: boolean;
  manufacturer: string;
  expiryDate: number;
  constructor(_name, _price, _weight, _kosher, _manufacturer, _expiryDate) {
    this.name = _name;
    this.price = _price;
    this.weight = _weight;
    this.kosher = _kosher;
    this.manufacturer = _manufacturer;
    this.expiryDate = _expiryDate;
  }
}
const product1 = new Product("milk", 5.99, 1, true, "tnuva", 17.8);
const product2 = new Product("bread", 2.69, 1, true, "Angel", 1.8);
const product3 = new Product("butter", 12000, 1, true, "tnuva", 23.1);
