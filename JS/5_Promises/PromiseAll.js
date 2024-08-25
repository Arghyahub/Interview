const prom1 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"Promise 1")
})

const prom2 = new Promise((resolve, reject) => {
    setTimeout(resolve,5000,"Promise 2")
})

const prom3 = new Promise((resolve, reject) => {
    setTimeout(resolve,2000,"Promise 3")
})

Promise.all([prom1,prom2,prom3])
.then((values)=> {
    console.log(values)
})
.catch((err)=> {        // If one fails, all stops
    console.log(err)
})