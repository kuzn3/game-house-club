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
    input:-webkit-autofill, .form input, input:-webkit-autofill:focus {
        box-shadow: 0 0 0px 1000px ${theme[random].wall} inset;
    }
    .form input {
        background-color: ${theme[random].wall};
    }
    .btnl:hover {
        background-color: ${theme[random].busy};
    }
    .btnl {
        background-color: ${theme[random].free};
    }
    .logol {
        text-shadow: 0.15vw 0.15vw ${theme[random].free};
    }
    `
}
function setTodo() {
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
    }
} 


