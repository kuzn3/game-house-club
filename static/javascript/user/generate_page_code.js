function generate_page_code() {
    html = document.querySelector("html")
    html.lang = "ru"
    body = document.querySelector("body")

    body.append(nav = document.createElement("nav"))
    nav.append(logo = document.createElement("div"))

    logo.append(house = document.createElement("img"))
    logo.append(menu = document.createElement("div"))

    house.src = "/static/svg.svg"


    buttons_names = ["новости", "эвенты", "пакеты", "железо", "коннект"]
    buttons_names.map(x => {
        menu.append(el = document.createElement("a"))
        el.className = "button"           
        el.textContent = x
        el.onclick = navigation_bar
    })

    nav.append(scroll = document.createElement("div"))
    scroll.append(items_block = document.createElement("div"))
    scroll.append(table_block = document.createElement("div"))
    

    nav.className = "nav"; logo.className = "logo"; 
    scroll.className = "scroll"; items_block.className = "items_block";
    table_block.className = "table_block"; house.className = "house";
    menu.className = "menu"; 
    
    
    table_block.style.display = "none"


    main = document.createElement("main")
    body.append(main)
    
    walls_id = ["wall_1", "wall_2", "wall_3", "wall_4"]
    walls_id.map(x => {
        main.append(el = document.createElement("div"))
        el.className = "wall"
        el.id = x
        if(x == "wall_4") {
            el.innerHTML = login_html
            btn = document.querySelector(".btnl")
            btn.onclick = login_user
        }
    })

    main.append(grid_blok_1 = document.createElement("div"))
    grid_blok_1.className = "grid-container_1"
    for(let i = 1; i < 13; i++) {
        grid_blok_1.append(el = document.createElement("div"))
        el.append(span = document.createElement("span"))
        span.textContent = i
        el.id = "place_" + i
        el.className = "gplace"
    }

    main.append(grid_blok_2 = document.createElement("div"))
    grid_blok_2.className = "grid-container_2"
    for(let i = 13; i < 18; i++) {
        grid_blok_2.append(el = document.createElement("div"))
        el.append(span = document.createElement("span"))
        span.textContent = i
        el.id = "place_" + i
        el.className = "gplace"
    }

    main.append(blok_18 = document.createElement("div"))
    blok_18.append(span_18 = document.createElement("span"))
    span_18.textContent = "PS"
    blok_18.id = "place_18"
    blok_18.className = "gplace"

    main.append(blok_19 = document.createElement("div"))
    blok_19.append(span_19 = document.createElement("span"))
    span_19.textContent = "PS"
    blok_19.id = "place_19"
    blok_19.className = "gplace"
}




