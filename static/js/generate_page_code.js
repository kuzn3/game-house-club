function generate_page_code() {
    html = document.querySelector("html")
    html.lang = "ru"
    body = document.querySelector("body")

    body.append(nav = document.createElement("nav"))
    nav.append(logo = document.createElement("div"))

    logo.append(house = document.createElement("div"))
    house.append(legend = document.createElement("span"))
    logo.append(menu = document.createElement("div"))

    buttons_names = ["новости", "эвенты", "пакеты", "железо", "коннект"]
    buttons_names.map(x => {
        menu.append(el = document.createElement("a"))
        el.className = "button"           
        el.textContent = x
        el.onclick = navigation
    })

    nav.append(scroll = document.createElement("div"))
    scroll.append(items_block = document.createElement("div"))
    scroll.append(text_block = document.createElement("div"))
    
    items_block.append(ul = document.createElement("ul"))
    items_block.append(input = document.createElement("input"))
    items_block.append(button = document.createElement("span"))

    nav.className = "nav"; logo.className = "logo";
    scroll.className = "scroll"; items_block.className = "items_block";
    text_block.className = "text_block"; house.className = "house";
    menu.className = "menu"; legend.className = "legend"; button.className = "btn";
    
    text_block.style.display = "none"

    legend.textContent = "GAME HOUSE"
    input.type = "text"
    input.id = "input"
    input.placeholder = ""

    url_for_request = "news"
    
    button.textContent = "\u2713"
    button.style.background = "white"
    button.onclick = append_item

    main = document.createElement("main")
    body.append(main)

    walls_id = ["wall_1", "wall_2", "wall_3", "wall_4"]
    walls_id.map(x => {
        main.append(el = document.createElement("div"))
        el.className = "wall"
        el.id = x
    })

    main.append(grid_blok_1 = document.createElement("div"))
    grid_blok_1.className = "grid-container_1"
    for(let i = 1; i < 13; i++) {
        grid_blok_1.append(el = document.createElement("div"))
        el.append(span = document.createElement("div"))
        span.textContent = i
        el.id = "place_" + i
        el.onclick = change_color
        el.className = "gplace"
    }

    main.append(grid_blok_2 = document.createElement("div"))
    grid_blok_2.className = "grid-container_2"
    for(let i = 13; i < 18; i++) {
        grid_blok_2.append(el = document.createElement("div"))
        el.append(span = document.createElement("div"))
        span.textContent = i
        el.id = "place_" + i
        el.onclick = change_color
        el.className = "gplace"
    }

    main.append(blok_18 = document.createElement("div"))
    blok_18.append(span_18 = document.createElement("div"))
    span_18.textContent = "PS"
    blok_18.onclick = change_color
    blok_18.id = "place_18"
    blok_18.style.width = "17%"
    blok_18.style.height = "34%"
    blok_18.style.position = "absolute"
    blok_18.style.top = "0"
    blok_18.style.left = "62%"
    blok_18.className = "gplace"

    main.append(blok_19 = document.createElement("div"))
    blok_19.append(span_19 = document.createElement("div"))
    span_19.textContent = "PS"
    blok_19.onclick = change_color
    blok_19.id = "place_19"
    blok_19.style.width = "30%"
    blok_19.style.height = "50%"
    blok_19.style.position = "absolute"
    blok_19.style.top = "0"
    blok_19.style.left = "30%"
    blok_19.className = "gplace"

}

