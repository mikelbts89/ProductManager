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
var User = (function () {
    function User(_name, _password, _email, _date) {
        this.name = _name;
        this.password = _password;
        this.email = _email;
        this.date = _date;
    }
    return User;
}());
var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
    var userName = document.getElementById("userName")
        .value;
    var userPass = parseFloat(document.getElementById("userPass").value);
    var userMail = document.getElementById("userMail")
        .value;
    var user1 = new User(userName, userPass, userMail, new Date());
    console.log(user1);
    document.getElementById("userName").value = "";
    document.getElementById("userPass").value = "";
    document.getElementById("userMail").value = "";
});
//# sourceMappingURL=app.js.map