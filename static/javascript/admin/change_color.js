function change_color() {
    if(this.style.background == theme[random].free) {
        send_and_change(this, theme[random].busy, "busy")
    }
    else if(this.style.background == theme[random].busy){
        send_and_change(this, theme[random].free, "free")
    }
}
function send_and_change(el, color, place_state) {
    let info = [String(el.id).replace("place_", ""), place_state]
    post_data_to_server(info, "/place", function(response_state) {
        if(response_state == Error) {
            console.error("error")
        }
        else {
            el.style.background = color 
        }
    })
}