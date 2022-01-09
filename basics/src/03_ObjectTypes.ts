// to declare as module (else its script and has global scope)
export { };


// An object is an instance which contains set of key value pairs. 
// center is a variable that must be assigned an object with x and y properties
let center: { x: number, y: number } = {
    x: 1,
    y: 2,
}

console.log(typeof center)
console.log(center)




// Type Alias to re-use object without copying inline types
type Point = { x: number, y: number };
let point1: Point = {
    x: 12,
    y: 72,
}

console.log(typeof point1);
console.log(point1);