// Closure are function generator functions
// That have the power to carry a lexalogical environment

const parent = () => {
    let num = 0;
    const childAdd = () => {
        console.log("num is",num);
        num+=1;
    }
    return childAdd;
}


const obj1 = parent() ;
const obj2 = parent() ;

console.log("obj 1")
obj1();
obj1();
obj1();

console.log("\nobj 2")
obj2()