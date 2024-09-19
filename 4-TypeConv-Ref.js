let age = 45

let ageStr = String(age)

let anotherString = age.toString()
// console.log(typeof age, typeof ageStr, typeof anotherString)

let string2 = age + 1 + "4" // 45 +'4' => 454
let string3 = "4" + 1 + age
// console.log(string3)

// let ageNo = Number(ageStr)
let ageNo = parseInt("asldjhf")
console.log(typeof ageNo,ageNo)

let bool = false
let boolNumber = Number(bool)

// console.log(boolNumber)

let a = 45
let b = a
a = 66

// console.log(a,b);

let arr = [1,2,3,4]
let arr2 = arr

arr.pop()
arr2.push(5)
// [] {} ()
console.log(arr,arr2)
