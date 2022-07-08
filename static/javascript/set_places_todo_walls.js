function set_walls() {
    let border_widths = []
    head = document.querySelector("head")
    head.append(style = document.createElement("style"))
    if (screen.availWidth < screen.availHeight) {
        border_widths = ["0.4vh", "1.4vh", "1vh", "0.4vh"] 
    }
    else { 
        border_widths = ["0.2vw", "0.7vw", "0.5vw", "0.2vw"]
    }
    style.innerHTML = 
    `
    .house, .menu, .color_block, .wall {
        background: ${theme[random].wall};
    }
    .text_block {
        border: ${border_widths[1]} solid ${theme[random].wall};
    }
    table, th, td {
        border: ${border_widths[3]} solid ${theme[random].wall};
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
function set_todo() {
    akie_items_list(obj_news, ".items_block")
    //akieItemsList(objNews, ".right_list")
    height_of_color_block_and_scroll_dspl()
    loader = document.querySelector(".loader")
        loader.remove()
}
function set_places() {
        console.log(obj_host_names)
        places = Object.values(obj_host_names)
        place_bloks = document.getElementsByClassName("gplace")
        for (place of place_bloks) {
            place.style.background = theme[random].free
        }
        for (value of places) {
            id = value - 1
            place_bloks[id].style.background = theme[random].busy
        }
}
function height_of_color_block_and_scroll_dspl() {
    if (screen.availWidth < screen.availHeight) {
        scroll.style.display = "none"
    }
} 


