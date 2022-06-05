function appendItem(item) {
    input = document.querySelector("input")
    if(input.value != "") {
        var li = document.createElement("li")
        var textNode = document.createTextNode(input.value)

        objList = urlForRequest == "news" ? objNews : objAkie
        objList[Object.keys(objList).length] = input.value
    }
    else { 
        var li = document.createElement("li")
        var textNode = document.createTextNode(item)
    }

    var span = document.createElement("span")
    
    span.textContent = "\u00D7"
    span.contentEditable = "false"
    span.className = "close"
    span.onclick = deleteItem
    
    li.appendChild(span)
    li.appendChild(textNode)
    li.contentEditable = "true"
    li.oninput = updateItem

    li.id = "item_" + Number(1 + ul.childNodes.length)
    
    if(input.value != "") {
        info = [li.id, textNode.data]
        postDataToServer(info, "/append_" + urlForRequest, function(responseState) {
            if(responseState == Error) {
                console.error("error")
            }
            else { 
                ul.insertBefore(li, ul.children[0])
                input.value = ""
            }
        })
        input.value = ""
    }
    else { 
        ul.insertBefore(li, ul.children[0]) 
    }
} 
