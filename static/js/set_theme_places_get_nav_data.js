function set_theme_places_get_nav_data() {
    get_data_from_server("/static/json/color.json", function(responseText) {
        timeout_f1 = window.setTimeout(get_places, 0)
        timeout_f2 = window.setTimeout(set_borders, 0)
        theme = JSON.parse(responseText)
        random = Math.floor(Math.random() * 2)
    })
    get_data_from_server("/get_data_news", function(responseText) {
        obj_news = JSON.parse(responseText)
        Array.from(Object.values(obj_news), item => {
            append_item(item)
        })
        timeout_f3 = window.setTimeout(height_of_color_block_and_scroll_dspl, 0)
    })
    get_data_from_server("/get_data_akie", function(responseText) {
        obj_akie = JSON.parse(responseText)
    })
    get_data_from_server("/get_data_connect", function(responseText) {
        obj_connect = JSON.parse(responseText)
    })
    get_data_from_server("/static/json/data.json", function(responseText) {
        text = JSON.parse(responseText)
    })
    window.onresize = height_of_color_block_and_scroll_dspl
}

function height_of_color_block_and_scroll_dspl() {
    if (screen.availWidth < screen.availHeight) {
        scroll.style.display = "none"
    }
    else {
        calculate_color_block_size()
        window.onresize = () => {
            calculate_color_block_size()
        }
    }
} 

function calculate_color_block_size() {
    h = scroll.offsetHeight - items_block.offsetHeight
    if(h <= 0) {color_block.style.height = "0px"}
    else {color_block.style.height = String(h) + "px"}
}

function set_borders() {
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
    ul li {
        border: ${border_widths[0]} solid ${theme[random].wall};
    }
    .text_block {
        border: ${border_widths[1]} solid ${theme[random].wall};
    }
    ul {
        border: ${border_widths[2]} solid ${theme[random].wall};
    }
    table, th, td {
        border: ${border_widths[3]} solid ${theme[random].wall};
    }
    `
}

function get_places() {
    get_data_from_server("/get_data_place", function(responseText) {
        lists_text = JSON.parse(responseText)
        places = Object.entries(lists_text)
        place_bloks = document.getElementsByClassName("gplace")
        
        for ([key, value] of places) {
            style = value == "free" ? theme[random].free : theme[random].busy
            place_bloks[key - 1].style.background = style
        }
    })
}

generate_page_code()
set_theme_places_get_nav_data()

