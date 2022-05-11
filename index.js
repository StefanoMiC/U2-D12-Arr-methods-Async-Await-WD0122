// THIS

// CONSTRUCTOR FUNCTIONS
function Person(name, age) {
  this.name = name;
  this.age = age;

  console.log(this);
}

//arrow functions cannot be used as constructor functions
const Person2 = (name, age) => {
  this.name = name;
  this.age = age;
};

const teacher = new Person("Stefano", 32);
const student = new Person("Sidath", 25);
// const student2 = new Person2("Sidath", 25);
console.log(teacher);
console.log(student);

// FACTORY FUNCTIONS
function factory(name, surname) {
  return { name, surname };
}

console.log(factory("Stefano", "Miceli"));

const myObject = {
  name: "John",
  otherThings: "something",
  myMethod: function () {
    console.log("Hey I'm inside a method!", this);
  },
};

const myObject2 = {
  name: "John",
  otherThings: "something",
  myMethod: () => {
    console.log("Hey I'm inside a method!", this);
  },
};

const myObject3 = {
  name: "John",
  otherThings: "something",
  myMethod: function () {
    console.log("OUTER THIS", this);

    function test() {
      console.log("INNER THIS", this);
    }

    test();
  },
};

const myObject4 = {
  name: "John",
  otherThings: "something",
  myMethod: function () {
    console.log("OUTER THIS", this);

    const test = () => {
      console.log("INNER THIS", this);
    };

    test();

    //   setTimeout(function(){
    //     console.log("GLOBAL THIS", this.name)
    //   }, 1000)
    //   setTimeout(() => {
    //     console.log("INNER THIS", this.name)
    //   }, 1000)
  },
};

const myObject5 = {
  name: "John",
  otherThings: "something",
  jobs: ["war veteran", "delivery guy", "swimmer"],
  myMethod: function () {
    this.jobs.forEach(job => {
      console.log(`${this.name} is a ${job}`);
    });
  },
};

myObject.myMethod();
myObject2.myMethod();
myObject3.myMethod();
myObject4.myMethod();
myObject5.myMethod();

// FOREACH

const array1 = ["a", "b", "c", "d", "e", "f"];

array1.forEach((letter, index, arr) => {
  console.log(letter, index, arr);
});

const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    callback(element, i, array);
  }
};

forEach(array1, item => {
  console.log(item + "!");
});

// FIND

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
  { name: "kiwis", quantity: 25 },
  { name: "watermelons", quantity: 3 },
];

//   const foundElement = inventory.find((obj) => obj.name === "ananas")
const foundElement = inventory.find(obj => obj.quantity > 0);

//   TERNARY OPERATOR
// let exists;

// if (foundElement) {
//     exists = true
// } else {
//     exists = false
// }

const exists = foundElement ? true : false;

//   console.log(foundElement ? foundElement.quantity : "I didn't find that element")
console.log(foundElement);

//INCLUDES
const pets = ["cat", "dog", "bat"];

console.log(pets.includes("goldfish"));

console.log("goldfish".includes("fish"));

// FINDINDEX
const foundIndex = inventory.findIndex(obj => obj.name === "apples");
console.log(inventory[foundIndex]);

// const copiedInventory = inventory.slice()
const copiedInventory = [...inventory];
const deletedItem = copiedInventory.splice(foundIndex, 1);

console.log(copiedInventory);
console.log(deletedItem);

//MAP

const numbers = [1, 4, 6, 99];

const doubles = numbers.map(number => number * 2);
const inventoryItems = inventory.map(item => {
  return { fruit: item.name, inStock: true };
});
console.log(inventoryItems);
const newUiItems = numbers.map(number => `<div> this is the number: ${number * 2}</div>`);
const newLiItems = numbers.map(number => `<li>item number: ${number}</li>`);
newLiItems;
// console.log(newUiItems.join(""))

const map = (array, callback) => {
  let transformed = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    transformed.push(callback(element));
  }

  return transformed;
};

// FILTER

console.log(
  "LAST",
  inventory.filter(obj => obj.quantity >= 3)
);

const filter = (array, callback) => {
  let filteredElements = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (callback(element)) {
      // true || false
      filteredElements.push(element);
    }
  }

  return filteredElements;
};

const shoppingCart = [
  { author: "Bob", title: "book 1", price: 7 },
  { author: "Bob", title: "book 2", price: 70 },
  { author: "Bob", title: "book 3", price: 17 },
  { author: "John", title: "book 4", price: 107 },
  { author: "John", title: "book 5", price: 56 },
  { author: "John", title: "book 6", price: 37 },
];

let total = shoppingCart.reduce((accumulator, currentValue) => {
  //   console.log("ACC", accumulator);
  //   console.log("CURR", currentValue);

  return accumulator + currentValue.price;
}, 0);

let booksTitle = shoppingCart.reduce((accumulator, currentValue) => {
  console.log("ACC", accumulator);
  console.log("CURR", currentValue);

  //   return accumulator.concat(currentValue.title);
  return [...accumulator, currentValue.title];
}, []);

booksTitle;
