
const textArea = document.querySelector("#textArea")
const charCount = document.getElementById("charCount")

textArea.addEventListener('input',(ev)=>{
    charCount.textContent = ev.target.value.length
    
})



