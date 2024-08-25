function func(){  // Old style functions act as class
    this.apple = 'apple',
    this.ball = 'ball'
}

const func2 = () => {
    this.apple = 'apple',
    this.ball = 'ball'
}

const obj = new func()
// const obj2 = new func2()  // Shows func2 is not a constructor

console.log(obj)
// console.log(obj2)