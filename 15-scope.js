// let, const, var

let size = 50

{
 let size = 20
}

// console.log(size)

function fun1(){
    let email = "example@gmail.com"
    function fun2(){
        let number = 55
        console.log("Your Email:",email)
    }
    fun2()
}

// fun1()

// myfun3()
function myfun3() {
  console.log("This is Function 3");
}

const myfun4 = () => {
    console.log("This is Function 3");
};
// myfun4()
