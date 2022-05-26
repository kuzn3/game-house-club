function append_item(item) {
    var li = document.createElement("li")
    var text_node = document.createTextNode(item)

    li.appendChild(text_node)

    li.id = "item_" + Number(1 + ul.childNodes.length)
 
    ul.insertBefore(li, ul.children[0]) 
} 