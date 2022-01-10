"use strict";
class Person {
    constructor(_age) {
        this.growOld2 = () => {
            this._age++;
        };
        this._age = _age;
    }
    growOld() {
        this._age++;
    }
    age() {
        return this._age;
    }
}
const person = new Person(31);
// person.growOld();
// Method-to-variable Assignement !!!
const growOld = person.growOld;
const growOld2 = person.growOld2;
// growOld();  // method is now invoked directly without the object-context --> RUNTIME ERROR
growOld2(); // method is now invoked directly without the object-context --> RUNTIME ERROR
console.log(person.age());
//# sourceMappingURL=01_This.js.map