const prom1 = new Promise((resolve, reject) => {
    setTimeout(resolve,3000,"Promise 1")
})

const prom2 = new Promise((resolve, reject) => {
    setTimeout(resolve,5000,"Promise 2")
})

const prom3 = new Promise((resolve, reject) => {
    setTimeout(reject,2000,"Promise 3")
})

Promise.race([prom1,prom2,prom3])
.then((value)=> {
    console.log("resolved " + value)
})
.catch((err)=> {        // If one fails, all stops
    console.log("rejected " + err)
})