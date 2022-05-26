function append_item(item) {
    if(input.value != "") {
        var li = document.createElement("li")
        var text_node = document.createTextNode(input.value)

        obj_list = url_for_request == "news" ? obj_news : obj_akie
        obj_list[Object.keys(obj_list).length] = input.value
    }
    else { 
        var li = document.createElement("li")
        var text_node = document.createTextNode(item)
    }

    var span = document.createElement("span")
    
    span.textContent = "\u00D7"
    span.contentEditable = "false"
    span.className = "close"
    span.onclick = delete_item
    
    li.appendChild(span)
    li.appendChild(text_node)
    li.contentEditable = "true"
    li.oninput = update_item
    li.id = "item_" + Number(1 + ul.childNodes.length)
    
    if(input.value != "") {
        info = [li.id, text_node.data]
        post_data_to_server(info, "/append_" + url_for_request, function(response_state) {
            if(response_state == Error) {
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
