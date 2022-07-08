function append_item(item) {
    input = document.querySelector("input")
    if(input.value != "") {
        var li = document.createElement("li")
        var text_span = document.createElement("span")
        text_span.textContent = input.value
        switch(url_for_request) {
            case "news":
                obj_list = obj_news
                break;
            case "akie":
                obj_list = obj_akie
                break;
            case "connect":
                obj_list = obj_connect
                break;
        }
        obj_list[Number(1 + ul.childNodes.length)] = input.value
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
    span.onclick = delete_item
    
    li.appendChild(span)
    li.appendChild(text_span)
    li.contentEditable = "true"
    li.oninput = update_item

    li.id = Number(1 + ul.childNodes.length)
    
    if(input.value != "") {
        let innerHTML = li.innerHTML
        info = [li.id, text_span.textContent]
        post_data_to_server(info, "/append_" + url_for_request, function(responseState) {
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
