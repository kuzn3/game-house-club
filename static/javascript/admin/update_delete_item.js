function delete_item() {
    var li = this.parentElement
    info = [li.id, li.textContent.replace("\u00D7", "")]
    post_data_to_server(info, "/delete_" + url_for_request, function(response_state) {
        if(response_state == Error) {
            console.error("error")
        }
        else {
            this.style.display = "none"
            li.style.display = "none"
        }
    })
}
function update_item() {
    info = [this.id, this.textContent.replace("\u00D7", "")]
    post_data_to_server(info, "/update_" + url_for_request, function(response_state) {
        if(response_state == Error) {
            console.error("error")
        }
    })
}
