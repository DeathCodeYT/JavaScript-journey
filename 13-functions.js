
// function myFun() {
//     console.log("hello")
//     console.log("DeathCode")
// }

// myFun()

// function add5and6(){
//     let sum = 5 + 6
//     return sum
// }

// // let sum = add5and6()
// console.log(add5and6())

// function addTwoNumbers(a,b){
//     let sum = a + b;
//     console.log(sum)
// }

// addTwoNumbers(5,7)
// addTwoNumbers(6,7)
// addTwoNumbers(7,7)
// addTwoNumbers(8,2)
// addTwoNumbers(9,7)


// function addTwoNumbers(a,b){
//     // let total = a+b
//     // return total
//     return a+b
//     // console.log("Hello kese ho")
// }

// console.log(addTwoNumbers(14,78));
// console.log(addTwoNumbers(45,34));
// console.log(addTwoNumbers(98,64));


// function addNumbers(...numbers){
//     let sum = 0;
//     for(let i=0; i<numbers.length;i++){
//         // sum = sum + numbers[i]
//         sum += numbers[i]

//     }
//     return sum
// }

// console.log(addNumbers(1,2,3,298374,238,238947))

// function myFun2(arr){
//    arr.pop()
// }

// let arr  = [1,2,3,4,5,6]
// console.log(arr);
// myFun2([...arr])
// console.log(arr);

function myFun3(o){
   o.email = "example@example.com"
}

let user = {
    name: "John",
    age: 30,
    email: "john@example.com",
}
console.log(user)
myFun3({...user})
console.log("After calling Function: ",user)

