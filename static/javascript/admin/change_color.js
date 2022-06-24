function changeColor() {
    if(this.style.backgroundColor == theme[random].free) {
        sendAndChange(this, theme[random].busy, "busy")
    }
    else if(this.style.backgroundColor == theme[random].busy){
        sendAndChange(this, theme[random].free, "free")
    }
}
function sendAndChange(el, color, placeState) {
    let info = [String(el.id).replace("place_", ""), placeState]
    let innerHTML = el.innerHTML
    postDataToServerLoader(info, "/place", el, function(responseState) {
        if(responseState == "Error") {
            console.error("error")
        }
        else {
            el.style.background = color 
        }
        el.innerHTML = innerHTML
    })
}