function setWalls() {
    let borderWidths = []
    head = document.querySelector("head")
    head.append(style = document.createElement("style"))
    if (screen.availWidth < screen.availHeight) {
        borderWidths = ["0.4vh", "1.4vh", "1vh", "0.4vh"] 
    }
    else { 
        borderWidths = ["0.2vw", "0.7vw", "0.5vw", "0.2vw"]
    }
    style.innerHTML = 
    `
    .house, .menu, .color_block, .wall {
        background: ${theme[random].wall};
    }
    .text_block {
        border: ${borderWidths[1]} solid ${theme[random].wall};
    }
    table, th, td {
        border: ${borderWidths[3]} solid ${theme[random].wall};
    }
    `
}
function setTodo() {
    window.onresize = calculateColorBlockSize()
    akieItemsList(objNews, ".items_block")
    //akieItemsList(objNews, ".right_list")
    heightOfColorBlockAndScrollDspl()
    loader = document.querySelector(".loader")
        loader.remove()
}
function setPlaces() {
        places = Object.entries(placesState)
        placeBloks = document.getElementsByClassName("gplace")
        
        for ([key, value] of places) {
            style = value == "free" ? theme[random].free : theme[random].busy
            placeBloks[key - 1].style.background = style
        }
}
function heightOfColorBlockAndScrollDspl() {
    if (screen.availWidth < screen.availHeight) {
        scroll.style.display = "none"
        colorBlock.style.display = "none"
    }
    else {
        calculateColorBlockSize()
        window.onresize = () => {
            calculateColorBlockSize()
        }
    }
} 
function calculateColorBlockSize() {
    colorBlock = document.querySelector(".color_block")
    h = scroll.offsetHeight - itemsBlock.offsetHeight
    if(h <= 0) {colorBlock.style.height = "0px"}
    else {colorBlock.style.height = String(h) + "px"}
}



