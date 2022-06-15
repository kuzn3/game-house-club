function deleteItem() {
    var li = this.parentElement
    info = [li.id, li.textContent.replace("\u00D7", "")]
    postDataToServer(info, "/delete_" + urlForRequest, function(responseState) {
        if(responseState == "ERROR") {
            console.error("error")
        }
        else {
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
            delete objList[li.id]
            li.remove()
        }
    })
}
function updateItem() {
    console.log(urlForRequest)
    let text = this.textContent.replace("\u00D7", "")
    let id = String(this.id)
    info = [this.id, text]
    console.log(this.textContent)
    postDataToServer(info, "/update_" + urlForRequest, function(responseState) {
        if(responseState == "ERROR") {
            console.error("error")
        }
        else {
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
            objList[id] = text
        }
    })
}
function create_input_and_button() {
    itemsBlock = document.querySelector(".items_block")
    itemsBlock.append(input = document.createElement("input"))
    itemsBlock.append(button = document.createElement("span"))

    input.type = "text"
    input.id = "input"
    input.placeholder = ""

    urlForRequest = "news"
    
    button.className = "btn";
    button.textContent = "\u2713"
    button.onclick = appendItem
}

