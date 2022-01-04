var People = /** @class */ (function () {
    function People() {
        this.name;
        this.age;
    }
    People.prototype.hello = function () {
        console.log("Hi there :)");
    };
    People.prototype.thatsMe = function () {
        console.log(this.name + " is " + this.age + " old.");
    };
    People.hometonw = "Tirol";
    return People;
}());
var olli = new People();
olli.age = 38;
olli.name = "Oliver";
olli.hello();
olli.thatsMe();
