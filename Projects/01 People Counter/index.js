
const counter = document.getElementById("counter")

const incBtn = document.getElementById("inc")
const decBtn = document.getElementById("dec")
const resetBtn = document.getElementById("reset")

// console.log(incBtn,decBtn,resetBtn);


incBtn.addEventListener('click',(ev)=>{
    counter.textContent = parseInt(counter.textContent) + 1
})
decBtn.addEventListener('click',(ev)=>{
    if(parseInt(counter.textContent)<=0) return
    counter.textContent = parseInt(counter.textContent) - 1
})

resetBtn.addEventListener('click',()=>{
    counter.textContent = 0
})

