var Product = (function () {
    function Product(_name, _price, _weight, _kosher, _manufacturer, _expiryDate) {
        this.name = _name;
        this.price = _price;
        this.weight = _weight;
        this.kosher = _kosher;
        this.manufacturer = _manufacturer;
        this.expiryDate = _expiryDate;
    }
    return Product;
}());
var product1 = new Product("milk", 5.9, 1, true, "tnuva", 17.8);
var product2 = new Product("bread", 2.69, 1, true, "Angel", 12.8);
var product3 = new Product("butter", 12.9, 1, true, "tnuva", 23.1);
function getHigh() {
    if (product1.price > product2.price) {
        console.log("The highest price : " + product1.name + " : " + product1.price);
    }
    else {
        console.log("The highest price : " + product2.name + " : " + product2.price);
    }
}
getHigh();
//# sourceMappingURL=app.js.map