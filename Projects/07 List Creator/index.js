
let items = []
const input = document.getElementById("inputField")
const addBtn = document.querySelector("#addButton")
const itemList = document.querySelector("#itemList")

function updateItemsList(){
    itemList.innerHTML = ""
    items.forEach((item,i)=>{
        const li = document.createElement('li')
        li.textContent = item
        li.id = i
        const span = document.createElement('span')
        span.classList.add('delete-icon')
        span.textContent = "x"
        span.addEventListener('click',()=>{
            deleteItem(i)
        })
        li.appendChild(span)
        itemList.appendChild(li)
    })
}
function deleteItem(id){
    items = items.filter((item,i)=>i!=id)
    document.getElementById(id).remove()
}

function addItem(item){
    items.push(item)
    updateItemsList()
}

addBtn.addEventListener('click',()=>{
    if(input.value){
        addItem(input.value)
        input.value= ""
    }
})