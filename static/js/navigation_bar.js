function navigation() {
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
        generate_thead("Зал PC VIP")
        generate_table(2, 4, text["прайс"]["вип"]["время"])
        generate_table(2, 4, text["прайс"]["вип"]["пакеты"])
        generate_thead("PLAYSTATION 5")
        generate_table(2, 3, text["прайс"]["сони"])
    }
    else if(this.textContent == "коннект") {
        scroll_for_mobile_v("коннект")
        clear_and_display_tb_ib()
        text_block.textContent = text["контакты"]
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
        items_block.insertBefore(ul, input)
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
        if (body.clientWidth <= 824) {
            console.log(name, r)
            scroll_dspl = scroll.style.display
            if(r == name) {
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
                console.log(scroll.style.display)
            }
            r[0] = name
        }
    }
}
r = []
//Create a new List Item when Clicking on append-button
function append_item(item) {
    if(item.height == 1) {
        var li = document.createElement("li")
        var input_value = document.getElementById("input").value
        var text_node = document.createTextNode(input_value)

        obj_list = url_for_request == "news" ? obj_news : obj_akie
        obj_list[Object.keys(obj_list).length] = input_value
    }
    else { 
        var li = document.createElement("li")
        var text_node = document.createTextNode(item)
    }

    var ul = document.querySelector("ul")
    li.id = "item_" + Number(1 + ul.childNodes.length)
    li.appendChild(text_node)

    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7")

    span.className = "close"
    span.onclick = delete_item
    span.appendChild(txt)
    li.appendChild(span)

    
    if(item.height == 1) {
        info = [li.id, text_node.data]
        post_data_to_server(info, "/append_" + url_for_request, function(response_state) {
            if(response_state == Error) {
                console.error("error")
            }
            else { 
                ul.insertBefore(li, ul.children[0])
                document.getElementById("input").value = ""
            }
        })
    }
    else { ul.insertBefore(li, ul.children[0]) }
} 
//Click on a close button to hide the current list item
function delete_item() {
    var li = this.parentElement
    post_data_to_server([li.id, li.textContent.slice(0, -1)], 
        "/delete_" + url_for_request, function(response_state) {
            if(response_state == Error) {
                console.error("error")
            }
            else {
                this.style.display = "none"
                li.style.display = "none"
            }
        })
}

