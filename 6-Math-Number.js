let age = 503450.928374
let id = new Number(2000000)
// console.log(age)
// console.log(id)

// console.log(id.toLocaleString('en-IN'))
// console.log(id.toString())
// console.log(age.toFixed(2))
// console.log(age.toPrecision(5))


// Math ---------------------------------------------
// console.log(Math.PI)
// console.log(Math.abs(-565))
// console.log(Math.round(7.28))
// console.log(Math.floor(7.999))
// console.log(Math.ceil(7.111))

let luckyNumber = Math.random()
luckyNumber *= 10
luckyNumber = Math.floor(luckyNumber)+10// 0-10 but 10 is not include
luckyNumber += 1
// console.log(luckyNumber)

let min=10,max=30
let random = Math.floor(Math.random()*(max-min+1)) + min

console.log(random)