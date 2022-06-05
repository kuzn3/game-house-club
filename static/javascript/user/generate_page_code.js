function generatePageCode() {
    html = document.querySelector("html")
    html.lang = "ru"
    body = document.querySelector("body")

    body.append(nav = document.createElement("nav"))
    nav.append(logo = document.createElement("div"))

    logo.append(house = document.createElement("div"))
    house.append(legend = document.createElement("span"))
    logo.append(menu = document.createElement("div"))

    buttonsNames = ["новости", "эвенты", "пакеты", "железо", "коннект"]
    buttonsNames.map(x => {
        menu.append(el = document.createElement("a"))
        el.className = "button"           
        el.textContent = x
        el.onclick = navigationBar
    })

    nav.append(scroll = document.createElement("div"))
    scroll.append(itemsBlock = document.createElement("div"))
    scroll.append(textBlock = document.createElement("div"))
    scroll.append(colorBlock = document.createElement("div"))

    itemsBlock.append(ul = document.createElement("ul"))

    nav.className = "nav"; logo.className = "logo"; colorBlock.className = "color_block";
    scroll.className = "scroll"; itemsBlock.className = "items_block";
    textBlock.className = "text_block"; house.className = "house";
    menu.className = "menu"; legend.className = "legend";
    
    textBlock.style.display = "none"
    legend.textContent = "GAME HOUSE"

    main = document.createElement("main")
    body.append(main)
    
    wallsId = ["wall_1", "wall_2", "wall_3", "wall_4"]
    wallsId.map(x => {
        main.append(el = document.createElement("div"))
        el.className = "wall"
        el.id = x
    })

    main.append(gridBlok_1 = document.createElement("div"))
    gridBlok_1.className = "grid-container_1"
    for(let i = 1; i < 13; i++) {
        gridBlok_1.append(el = document.createElement("div"))
        el.append(span = document.createElement("div"))
        span.textContent = i
        el.id = "place_" + i
        el.className = "gplace"
    }

    main.append(gridBlok_2 = document.createElement("div"))
    gridBlok_2.className = "grid-container_2"
    for(let i = 13; i < 18; i++) {
        gridBlok_2.append(el = document.createElement("div"))
        el.append(span = document.createElement("div"))
        span.textContent = i
        el.id = "place_" + i
        el.className = "gplace"
    }

    main.append(blok_18 = document.createElement("div"))
    blok_18.append(span_18 = document.createElement("div"))
    span_18.textContent = "PS"
    blok_18.id = "place_18"
    blok_18.className = "gplace"

    main.append(blok_19 = document.createElement("div"))
    blok_19.append(span_19 = document.createElement("div"))
    span_19.textContent = "PS"
    blok_19.id = "place_19"
    blok_19.className = "gplace"
}

