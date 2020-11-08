function add(){
    var val = document.getElementById("val")
    var list = document.getElementById("list")

    var li=document.createElement("li")
    var liText = document.createTextNode(val.value)
    li.appendChild(liText)
    val.value=""






    var dlt = document.createElement("button")
    var btnText = document.createTextNode("DELETE")
    dlt.setAttribute("onclick","deleteItem(this)")
    dlt.setAttribute("class","add-item")
    dlt.appendChild(btnText)
    li.appendChild(dlt)
    

    var edit = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    edit.appendChild(editText)
    li.appendChild(edit)
    edit.setAttribute("onclick","edit(this)")
    edit.setAttribute("class","add-item")

    list.appendChild(li)
   
}
function deleteItem(e){
    e.parentNode.remove()
}
function deleteAll(){
   var ul =  document.getElementById("list")
   ul.innerHTML=""
}
function edit(e){
    var editValue = prompt("Enter edit value : " ,e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=editValue; 
   
}