function set_theme_places_get_nav_data() {

    get_data_from_server("/static/json/color.json", function(responseText) {
        timeout_f1 = window.setTimeout(get_places, 0)
        timeout_f2 = window.setTimeout(set_borders, 0)
        theme = JSON.parse(responseText)
        random = Math.floor(Math.random() * 3)
    
        let walls = document.getElementsByClassName("wall")
        Array.from(walls, x => {
            x.style.background = theme[random].wall
        })
        let logo_menu = [house, menu]
        Array.from(logo_menu, x => {
            x.style.background = theme[random].wall
        })
    })

    function set_borders() {
        head = document.querySelector("head")
        head.append(style = document.createElement("style"))
        style.innerHTML = 
        `
        ul li {
            border: 0.2vw solid ${theme[random].wall};
        }
        .text_block {
            border: 0.7vw solid ${theme[random].wall};
        }
        ul {
            border: 0.5vw solid ${theme[random].wall};
        }
        table, th, td {
            border: 0.2vw solid ${theme[random].wall};
        }
        `
    }

    get_data_from_server("/get_data_news", function(responseText) {
        obj_news = JSON.parse(responseText)
        Array.from(Object.values(obj_news), item => {
            append_item(item)
        })
    })

    get_data_from_server("/get_data_akie", function(responseText) {
        obj_akie = JSON.parse(responseText)
    })

    function get_places() {
        get_data_from_server("/get_data_places", function(responseText) {
            lists_text = JSON.parse(responseText)
            places = Object.entries(lists_text)
            place_bloks = document.getElementsByClassName("gplace")
            
            for ([key, value] of places) {
                style = value == "free" ? theme[random].free : theme[random].busy
                place_bloks[key - 1].style.background = style
            }
        })
    }

    get_data_from_server("/static/json/data.json", function(responseText) {
        text = JSON.parse(responseText)
    })

}

generate_page_code()
set_theme_places_get_nav_data()