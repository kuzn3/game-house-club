function appendItem(item) {
    input = document.querySelector("input")
    if(input.value != "") {
        var li = document.createElement("li")
        var text_span = document.createElement("span")
        text_span.textContent = input.value
        switch(urlForRequest) {
            case "news":
                objList = objNews
                break;
            case "akie":
                objList = objAkie
                break;
            case "connect":
                objList = objConnect
                break;
        }
        objList[Number(1 + ul.childNodes.length)] = input.value
    }
    else { 
        var li = document.createElement("li")
        var text_span = document.createElement("span")
        text_span.textContent = item
    }

    var span = document.createElement("span")
    
    span.textContent = "\u00D7"
    span.contentEditable = "false"
    span.className = "close"
    span.onclick = deleteItem
    
    li.appendChild(span)
    li.appendChild(text_span)
    li.contentEditable = "true"
    li.oninput = updateItem

    li.id = Number(1 + ul.childNodes.length)
    
    if(input.value != "") {
        let innerHTML = li.innerHTML
        info = [li.id, text_span.textContent]
        postDataToServer(info, "/append_" + urlForRequest, function(responseState) {
            if(responseState == "Error") {
                console.error("error")
            }
            else {
                li.innerHTML = innerHTML
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
