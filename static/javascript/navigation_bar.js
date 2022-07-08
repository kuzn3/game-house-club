function navigation_bar() {
    buttons_group = document.getElementsByClassName("button")
    table_block = document.querySelector(".table_block")
    items_block = document.querySelector(".items_block")

    if(this.textContent == "новости") {
        scroll_for_mobile_version("новости")
        table_block.style.display = "none"
        url_for_request = "news"
        akie_items_list(obj_news, ".items_block")
    }
    else if(this.textContent == "эвенты") {
        scroll_for_mobile_version("эвенты")
        table_block.style.display = "none"
        url_for_request = "akie"
        akie_items_list(obj_akie, ".items_block")
    }
    else if(this.textContent == "пакеты") {
        scroll_for_mobile_version("пакеты")
        clear_and_display_tb_ib()
        generate_thead("Зал PC STANDART")
        generate_table(2, 4, text["прайс"]["стандарт"]["время"])
        generate_table(2, 4, text["прайс"]["стандарт"]["пакеты"])
        generate_thead("PLAYSTATION 5")
        generate_table(2, 3, text["прайс"]["сони-ст"])
        generate_thead("Зал PC VIP")
        generate_table(2, 4, text["прайс"]["вип"]["время"])
        generate_table(2, 4, text["прайс"]["вип"]["пакеты"])
        generate_thead("PLAYSTATION 5 VIP")
        generate_table(2, 3, text["прайс"]["сони-вп"], "прайс сони-вп")
    }
    else if(this.textContent == "железо") {
        scroll_for_mobile_version("железо")
        clear_and_display_tb_ib()
        generate_thead("Зал PC STANDART")
        generate_table(2, 6, text["пк"]["стандарт-1"])
	    generate_thead("Зал PC STANDART")
        generate_table(2, 6, text["пк"]["стандарт-2"])
	    generate_thead("Зал PC STANDART")
        generate_table(2, 6, text["пк"]["стандарт-3"])
	    generate_thead("Зал PC STANDART")
        generate_table(2, 6, text["пк"]["стандарт-4"])
        generate_thead("Зал PC VIP")
        generate_table(2, 6, text["пк"]["вип"])
    }
    else if(this.textContent == "коннект") {
        scroll_for_mobile_version("коннект")
        table_block.style.display = "none"
        url_for_request = "connect"
        akie_items_list(obj_connect, ".items_block")
    }
}
function akie_items_list(list, block_selector) {
    block = document.querySelector(block_selector)
    //console.log(block, block_selector)
    try {
        block.querySelector("ul").remove()
        ul = document.createElement("ul")
    }
    catch {
        ul = document.createElement("ul")
    }
    try {
        block.insertBefore(ul, input)
    }
    catch {
        block.appendChild(ul)
    }
    Array.from(Object.values(list), item => {
        append_item(item, list)
    })
    block.style.display = ""
    table_block.textContent = ""
}
function clear_and_display_tb_ib() {
    table_block.style.display = ""
    table_block.textContent = ""
    items_block.style.display = "none"
}
function scroll_for_mobile_version(name) {
    if (screen.availWidth < screen.availHeight) {
        scroll_dspl = scroll.style.display
        if(localStorage.getItem("menu_select") == name) {
            if(scroll.style.display == "block") {
                scroll.style.display = "none"
            }
            else if(scroll.style.display == "none") {
                scroll.style.display = "block"
                //console.log(scroll.style.display)
            }
        }
        else if(scroll.style.display == "none") {
            scroll.style.display = "block"
        }
        localStorage.setItem("menu_select", name)
    }
}
