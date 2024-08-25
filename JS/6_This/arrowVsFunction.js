function print() {
  console.log(this); // has a lot of properties
}

print(); // Output: { performance and other properties}

const printFn = () => {
  console.log(this); // has a no properties
  // This is not valid inside an arrow function
};

printFn(); // Output: {}

console.log("Global obj :", this); // {}
// but for browsers the global object is window
