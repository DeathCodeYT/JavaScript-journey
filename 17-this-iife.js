const channel = {
    name:"DeathCode",
    subscribers:"2.04k",

    print:function(){
        // console.log(`${this.name} has ${this.subscribers}`)
        console.log(this)
    }
}

// channel.print()
// channel.name = "Gaming"
// channel.print()

function fun(){
    // this.op = "op"
    console.log("fun")
}

const fun2 = ()=>{
    console.log(this)
}

// const fun3 = new fun()
// console.log(fun3)

// const fun4 = ()=>{return{name:"DeathCode",val:"44"}}

// console.log(fun4())



// Immediately Invoked Function Expression

(()=>{
    console.log("Started")
})();
(function(){
    console.log("Started 2")
})();

