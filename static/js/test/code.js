//Create a new List Item when Clicking on append-button
function append_item(item) {
    if(item.height == 1) {
        var li = document.createElement("li")
        var inputValue = document.getElementById("input").value
        var t = document.createTextNode(inputValue)
    }
    else { 
        var li = document.createElement("li")
        var t = document.createTextNode(item)
    }
    var ul = document.querySelector("ul")
    li.id = "item_" + Number(1 + ul.childNodes.length)
    li.appendChild(t)
    //Close button and append it to each list item
    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7")
    span.className = "close"
    span.onclick = delete_item
    span.appendChild(txt)
    li.appendChild(span)
    if(item.height == 1) {
        info = [li.id, t.data]
        if(post_data_to_server(info, (new URL(document.URL)).pathname + "/append_news") != "error") {
            ul.insertBefore(li, ul.children[0])
            document.getElementById("input").value = ""
        }
        else {
            console.error("ERROR")
        }
    }
    else { ul.insertBefore(li, ul.children[0]) }
} 
//Click on a close button to hide the current list item
function delete_item() {
    var el = this 
    var li = this.parentElement
    if(post_data_to_server([li.id, li.textContent.slice(0, -1)], 
        (new URL(document.URL)).pathname + "/delete_news") != "error") {
        el.style.display = "none"
        li.style.display = "none"
    }
    else {console.error("ERROR")}
}