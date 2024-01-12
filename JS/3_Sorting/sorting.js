arr = [1,5,2,11,4,7,22,51]

arr.sort() //<- Converts to string and then sorts
console.log("arr.sort() : ",arr)

// Numberic sort
arr = [1,5,2,11,4,7,22,51]

arr.sort((a,b) => a-b)

console.log("sort(comp) : ",arr)