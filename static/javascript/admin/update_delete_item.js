function delete_item() {
    let li = this.parentElement
    info = [li.id, li.textContent.replace("\u00D7", "")]
    post_data_to_server(info, "/delete_" + url_for_request, function(responseState) {
        if(responseState == "Error") {
            console.error("error")
        }
        else {
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
            delete obj_list[li.id]
            li.remove()
        }
    })
}
function update_item() {
    console.log(url_for_request)
    let li = this
    let text = li.textContent.replace("\u00D7", "")
    let id = String(li.id)
    info = [li.id, text]
    post_data_to_server(info, "/update_" + url_for_request, function(responseState) {
        if(responseState == "Error") {
            console.error("error")
        }
        else {
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
            obj_list[id] = text
        }
    })
}
function create_input_and_button() {
    items_block = document.querySelector(".items_block")
    items_block.append(input = document.createElement("input"))
    items_block.append(button = document.createElement("span"))

    input.type = "text"
    input.id = "input"
    input.placeholder = ""

    url_for_request = "news"
    
    button.className = "btn";
    button.textContent = "\u2713"
    button.onclick = append_item
}

