const prompt = require("prompt-sync")({ sigint: true })

const fetchData = (name) => {
    return new Promise((resolve,reject)=> {
        if (name.toLowerCase()==='arghya'){
            setTimeout(() => {
                resolve("Call me a player, bank mai rupaiye, Paisa Ami tabh tabh, hero meri Jaya\n")
            }, 1000);
        }
        else{
            setTimeout(()=> {
                reject("Time waste kiya hi buddhu hai\n")
            },3000)
        }
    })
}

const func = async (name) => {
    while(true){
        try{
            const name = prompt("Enter name : ")
            const data = await fetchData(name) ;
            console.log(data)
        }
        catch(err){
            console.log(err);
        }
    }
}

func('Arghya')