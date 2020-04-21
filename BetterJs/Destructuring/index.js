document.getElementById("app").innerHTML = `
<h1>Hello Parcel</h1>
<div>
    Look 
    <a href="https://parceljs.org" target="_blank" rel="noopener"/>
    for more info about Parcel.
</div>
`;

// Function Destructuring

// Because we are defining our functions with 'const' this will throw a syntax error in our console. Comment out all functions bellow minus the one you want to run :)

// Normal Version

const newArray = ["hi", "richard"];

const a = newArray[0];
const b = newArray[1];

console.log(b);

Shorthand Version
const [a, b] = ["hi", "richard"];

console.log(b);

// Spread Operator
const newArray = ["hi", "richard", "germaine", "spreadftw!"];
const [a, b, ...c] = newArray;

console.log(c);

// Simplified expression
const sayHi = () => console.log("hi");

sayHi();

// Defining an Object
//

// Old way
const makePerson = (name, age, job) => {
  return {
    name: name,
    age: age,
    job: job,
  };
};
console.log(makePerson("richard", 28, "Developer"));

// New way. If the variable is the same as the property we can omit the need for duplication.
const makePerson = (name, age, job) => {
  return {
    name,
    age,
    job,
  };
};
console.log(makePerson("richard", 28, "Developer"));

// Frustrating way of defining Object names.
const dev = makePerson("ricky", 28, "Developer");
const name = dev.name;
const devName = dev.name;

console.log(name);

// Better way of defining Object names. This is cleaner code.
const dev = makePerson("ricky", 28, "Developer");
const { name } = dev;

console.log(name);

// Better way with spread operator
const dev = makePerson("ricky", 28, "Developer");
// You can name your spread operator 'whatever' you want. However you should name it 'props' if you are using react or etc. to make your code more legible.
const { name, ...whatever } = dev;

console.log(name, whatever);
