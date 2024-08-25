// With Bind an object can borrow method with its object details

const obj1 = {
    name:'apple',
    cat:'cat',
    hello: function(){
        console.log("Hello ",this.name) ;
    }
}

obj1.hello()

const obj3 = {
    name: 'tiger'
}

const binded = obj1.hello.bind(obj3)
binded()
console.log('\n\n');

// Bind has another function, when object are sent as callbacks, the this method pointer dies

setTimeout(obj1.hello,2000)     //<- Will show undefined

// We can actually bind the object to the function and its pointer won't lose

const helloName = obj1.hello.bind(obj1)

setTimeout(helloName,2000)