function change_color() {
    if(this.style.backgroundColor == theme[random].free) {
        send_and_change(this, theme[random].busy, "busy")
    }
    else if(this.style.backgroundColor == theme[random].busy){
        send_and_change(this, theme[random].free, "free")
    }
}
function send_and_change(el, color, place_state) {
    let info = [String(el.id).replace("place_", ""), place_state]
    let innerHTML = el.innerHTML
    post_data_to_server_loader(info, "/place", el, function(responseState) {
        if(responseState == "Error") {
            console.error("error")
        }
        else {
            el.style.background = color 
        }
        el.innerHTML = innerHTML
    })
}