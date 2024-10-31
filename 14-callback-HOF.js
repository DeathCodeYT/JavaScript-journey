
// function callback(name){
//     console.log(`Hello ${name}`)
// }

// function greetings(name,cb){
//     let greet = "Good Afternoon"
//     cb(`${name}, ${greet}`)
// }
// const greetings = function (name,cb){
//     let greet = "Good Afternoon"
//     cb(`${name}, ${greet}`)
// }

// greetings("Jhon",function (name){
//     console.log(`Hello ${name}`)
// })


// const greetings = (name,cb)=>{
//     let greet = "Good Afternoon"
//     cb(`${name}, ${greet}`)
// }
// greetings("Death Code",(name)=>{
//     console.log(`Hello ${name}`)
// })


// HOF =>  Higher Order Function

function multiplier(factor){
    return (num)=>{
        console.log(num*factor)
        return num*factor
    }
}

// console.log(multiplier(5))
let double = multiplier(2)
let triple = multiplier(3)
let fourMultiplyier = multiplier(4)
// double(7)
double(8)
triple(8)
fourMultiplyier(8)

// map, filter, reduce, forEach
