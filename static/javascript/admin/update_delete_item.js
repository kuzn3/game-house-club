function deleteItem() {
    var li = this.parentElement
    info = [li.id, li.textContent.replace("\u00D7", "")]
    postDataToServer(info, "/delete_" + urlForRequest, function(responseState) {
        if(responseState == Error) {
            console.error("error")
        }
        else {
            this.style.display = "none"
            li.style.display = "none"
        }
    })
}
function updateItem() {
    info = [this.id, this.textContent.replace("\u00D7", "")]
    postDataToServer(info, "/update_" + urlForRequest, function(responseState) {
        if(responseState == Error) {
            console.error("error")
        }
    })
}
function init() {
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

init()