const ob1 = {
  owner: "Arghya",
  print: function () {
    console.log("Hello " + this.owner);
  },
};

ob1.print();
// Output: Hello Arghya

const ob2 = {
  owner: "Not me",
  print: () => {
    console.log("Hello " + this.owner);
  },
};

ob2.print();
// Output: Hello undefined
