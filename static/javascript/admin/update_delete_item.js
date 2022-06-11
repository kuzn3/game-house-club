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
            this.style.display = "none"
            li.style.display = "none"
        }
    })
}
function updateItem() {
    console.log(urlForRequest)
    info = [this.id, this.textContent.replace("\u00D7", "")]
    postDataToServer(info, "/update_" + urlForRequest, function(responseState) {
        if(responseState == "ERROR") {
            console.error("error")
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
    button.style.background = "white"
    button.onclick = appendItem
}

