function navigation_bar() {
    buttons_group = document.getElementsByClassName("button")
    if(this.textContent == "новости") {
        scroll_for_mobile_v("новости")
        text_block.style.display = "none"
        url_for_request = "news"
        akie_items_list(obj_news)
    }
    else if(this.textContent == "эвенты") {
        scroll_for_mobile_v("эвенты")
        text_block.style.display = "none"
        url_for_request = "akie"
        akie_items_list(obj_akie)
    }
    else if(this.textContent == "пакеты") {
        scroll_for_mobile_v("пакеты")
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
        generate_table(2, 3, text["прайс"]["сони-вп"])
    }
    else if(this.textContent == "коннект") {
        scroll_for_mobile_v("коннект")
        text_block.style.display = "none"
        url_for_request = "connect"
        akie_items_list(obj_connect)
    }
    else if(this.textContent == "железо") {
        scroll_for_mobile_v("железо")
        clear_and_display_tb_ib()
        generate_thead("Зал PC STANDART")
        generate_table(2, 6, text["пк"]["стандарт"])
        generate_thead("Зал PC VIP")
        generate_table(2, 6, text["пк"]["вип"])
    }
    function akie_items_list(list) {
        ul.remove()
        ul = document.createElement("ul")
        try {items_block.insertBefore(ul, input)}
        catch {items_block.appendChild(ul)}
        Array.from(Object.values(list), item => {
            append_item(item, list)
        })
        items_block.style.display = ""
        text_block.textContent = ""
    }
    function clear_and_display_tb_ib() {
        text_block.style.display = ""
        items_block.style.display = "none"
        text_block.textContent = ""
    }
    function scroll_for_mobile_v(name) {
        if (screen.availWidth < screen.availHeight) {
            scroll_dspl = scroll.style.display
            if(localStorage.getItem("menu_select") == name) {
                if(scroll.style.display == "block") {
                    scroll.style.display = "none"
                }
                else if(scroll.style.display == "none") {
                    scroll.style.display = "block"
                    console.log(scroll.style.display)
                }
            }
            else if(scroll.style.display == "none") {
                scroll.style.display = "block"
            }
            localStorage.setItem("menu_select", name)
        }
    }
}
