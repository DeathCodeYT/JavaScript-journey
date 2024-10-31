// for, while , do-while

// for loop
// for(initialization ; condition; increment/decrement) {
//     // code to be executed
// }


// for( let i = 1 ; i<=10 ; i++){
//     console.log(i);
// }

// let i = 1
// for( ; i<=10 ; i++){
//     console.log(i);
// }

// console.log("Outside: ",i);

// let food = ["Burger","Momos","Roti","Sabji","Salad"]
// for(let i = food.length - 1 ; i>=0 ; i++){
//     console.log(food[i]);
// }

// let food = ["Burger","Momos","Roti","Sabji","Salad"]
// for(let i = 0 ; i<food.length ; i--){
//     console.log(food[i]);
// }

for(let i = 1 ; i<=10 ; i += 2){
    console.log(i);
}

let user = {
    name: "Rahul",
    age: 25,
    city: "Delhi",
    hobbies: ["Cricket","Football","Reading"],
}
// Object.keys(user) => [name,age,city,hobbies]

// for(let i=0 ; i < Object.keys(user).length ; i++){
//     console.log(user[Object.keys(user)[i]])
// }

// for(let i=1;i<=5;i++){

//     for(let j=1;j<=5;j++){
//         console.log(`Outer: ${i} Inner: ${j}`)
//     }

// }

// break & continue statement
  // break => terminate the loop
  // continue => skip the current iteration and move to the next one


// for(let i=1;i<=10;i++){
//     if(i==5){
//         break;
//     }
//     console.log(i)
// }

// for(let i=1;i<=10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i)
// }

// while(condtion){
//     // code to be executed
// }

// let i = 1;
// while(i<=10){
//     if(i==4){
//         i++
//         continue
//     }
//     console.log(i)
//     i++;
// }


// do{
//   // code  to be executed
// }while(condition)

// let i=6
// do{
//     console.log(i)
//     i++
// }while(i<=5)

