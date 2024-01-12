// Splice: Remove value and replace with new
// Format
// arr.splice(loc,how many to delete,As many elem to add sep(,) )

arr = [10,20,30,40,50]
arr.splice(2,0,22,24,26,28)

// arr.toSpliced() to not alter original array

console.log(arr)

// Slice
arr = [10,20,30,40]

console.log(arr.slice(0,2))