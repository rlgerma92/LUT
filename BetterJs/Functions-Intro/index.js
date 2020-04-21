document.getElementById("app").innerHTML = `
<h1>Hello Parcel</h1>
<div>
    Look 
    <a href="https://parceljs.org" target="_blank" rel="noopener"/>
    for more info about Parcel.
</div>
`;

// Hoisted Function Declaration
function sayHi() {
  return console.log("hi");
}
sayHi();

// Function Expression
// Anonymous Function, Not Named
// Not Hoisted
const sayHiAgain = function () {
  return console.log("hi again");
};
sayHiAgain();

// Named function
const keepSayingHi = function keepSayingHi() {
  return console.log("hi hi hi");
};
keepSayingHi();

// Arrow function
const arrowHi = () => {
  return console.log("Arrow says hi");
};
arrowHi();

// Another way of an arrow as an expression. Same as above. Often used for callbacks.
const alsoArrowHi = () => console.log("Mini hi");

alsoArrowHi();
