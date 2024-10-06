// let obj = {}
// let obj = new Object()

let book = {
  name: "JS Journey",
  author: "Death Code",
  "page": 34,
  "publish date":"4 Ocotober 2023"
};

// console.log(book.name);
// console.log(book["name"]);

book["language"] = "Hinglish"
book.page = 88

// console.log(book);
// console.log(Object.keys(book));
// console.log(Object.values(book));
// console.log(Object.entries(book));


const sym = Symbol("hobby")
const sym2 = Symbol("hobby")

const user = {
    name:"Rahul",
    age:18,
    email:"rahul@gmail.com",
    // email:"example@gmail.com",
    location:"Delhi, India",
    [sym]:"Coding",
    [sym2]:"Hacking",
    // fun:function(){
    //     console.log("Hello i m user function")
    // }
}
// console.log(user[sym])
// user.fun()

let obj1 = {a:1,b:2}
let obj2 = {c:3,d:4}

// let obj3 = {obj1,obj2}
// console.log(obj3["obj1"].a);
// let obj3 = Object.assign({},obj1,obj2)
let obj3 = {...obj1,...obj2,"e":44}

// console.log(obj3);

const users = [
    {
        name:"rahul",
        id:1
    },
    {
        name:"piyush",
        id:2
    },
    {
        name:"Death Code",
        id:99
    },
]


// console.log(users[0].name);
let arr = ["Divya",44]
// const {name,age} = user
// const [name2,age2] = arr
// console.log(name,age)
// console.log(name2,age2)

const {name:rahul,age} = user
console.log(rahul,age)



