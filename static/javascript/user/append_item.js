function appendItem(item) {
    var li = document.createElement("li")
    var textNode = document.createTextNode(item)

    li.appendChild(textNode)

    li.id = Number(1 + ul.childNodes.length)
 
    ul.insertBefore(li, ul.children[0]) 
} 