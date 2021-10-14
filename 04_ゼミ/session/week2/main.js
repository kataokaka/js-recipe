const MemoInput = document.getElementById("memo-input")
const AddButton = document.getElementById("add-button") 
const MemoContainer = document.getElementById("memo-container")

AddButton.onclick = function(){
    console.log(MemoInput.value)
    Append(MemoInput.value)
    
    MemoInput.value = ""
}
   

const Append = function(text){
    const box = document.createElement("div")
    box.className = "container"
    const card = document.createElement("div")
    card.className = "card"
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
    const deleteButton = document.createElement("div")
    deleteButton.className = "deleteButton"
    deleteButton.textContent = "削除"

    MemoContainer.append(box)
    box.append(card)
    box.append(todo)
    box.append(deleteButton)

    deleteButton.onclick = function(){
        box.remove()
    }

    return card
}
    



   
    
    
   
    
