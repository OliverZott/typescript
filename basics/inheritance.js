var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Type = /** @class */ (function () {
    function Type(typeName) {
        this.typeName = typeName;
    }
    return Type;
}());
var Animal = /** @class */ (function () {
    function Animal(name, type) {
        this.name = name;
        this.type = type;
    }
    Animal.prototype.toString = function () {
        console.log(this.name + " is an animal of type " + this.type.typeName);
    };
    return Animal;
}());
var SuperAnimal = /** @class */ (function (_super) {
    __extends(SuperAnimal, _super);
    function SuperAnimal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuperAnimal.prototype.toString = function () {
        _super.prototype.toString.call(this);
        console.log(" And is a SUPER animal =)");
    };
    return SuperAnimal;
}(Animal));
var kosto = new SuperAnimal("Kostolany", new Type("Cat"));
kosto.toString();
