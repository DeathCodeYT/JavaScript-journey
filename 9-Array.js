let arr = [1,2,3,4,5,6]
arr[3] = 8

let fastFood = ["Maggie","Momos","Burger"]

// console.log(fastFood)

// console.log(fastFood.indexOf("Momos"))
// console.log(fastFood.includes("Pizza"))

fastFood.push("Pizza")
fastFood.unshift("Fired Momos")

fastFood.pop() 
fastFood.shift()


// console.log(fastFood.length);

let homeFood = ["Roti","Sabji","Salad"]
// let arr2 = fastFood + homeFood
// fastFood.push(homeFood)
// let arr2 = fastFood.concat(homeFood)
let arr2 = [...fastFood,"You are Coder",...homeFood,...arr]

let arr3 = [10,20,30,40,50,60,70,80,90,100]
// let tukda = arr3.slice(2,6)
// let tukda = arr3.splice(2,4)


// console.log(tukda)
// console.log(arr3)

// console.log(arr3.reverse());

let arr4 = new Array(9).fill(null)
// console.log(arr4)

let joined = arr3.join(".")

console.log(joined)