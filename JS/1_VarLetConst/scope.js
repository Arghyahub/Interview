// let and const are block scoped ,var is not blocked scope

if (true){
    var apple = 'apple'
}

console.log(apple)

if (true){
    let banana = 'banana'
}
// Giving error , same for const
console.log(banana)