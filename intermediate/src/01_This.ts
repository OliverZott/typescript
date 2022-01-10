class Person {
    private _age: number;
    constructor(_age: number) {
        this._age = _age;
    }

    growOld() {
        this._age++;
    }

    growOld2 = () => {  // property pointing to arrow function to capture context from surrounding content 
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
growOld2();  // method is now invoked directly without the object-context --> RUNTIME ERROR

console.log(person.age());