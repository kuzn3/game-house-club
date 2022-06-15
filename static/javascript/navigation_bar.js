function navigationBar() {
    buttonsGroup = document.getElementsByClassName("button")
    tableBlock = document.querySelector(".table_block")
    itemsBlock = document.querySelector(".items_block")

    if(this.textContent == "новости") {
        scrollForMobileVersion("новости")
        tableBlock.style.display = "none"
        urlForRequest = "news"
        akieItemsList(objNews, ".items_block")
    }
    else if(this.textContent == "эвенты") {
        scrollForMobileVersion("эвенты")
        tableBlock.style.display = "none"
        urlForRequest = "akie"
        akieItemsList(objAkie, ".items_block")
    }
    else if(this.textContent == "пакеты") {
        scrollForMobileVersion("пакеты")
        clearAndDisplayTbIb()
        generateThead("Зал PC STANDART")
        generateTable(2, 4, text["прайс"]["стандарт"]["время"])
        generateTable(2, 4, text["прайс"]["стандарт"]["пакеты"])
        generateThead("PLAYSTATION 5")
        generateTable(2, 3, text["прайс"]["сони-ст"])
        generateThead("Зал PC VIP")
        generateTable(2, 4, text["прайс"]["вип"]["время"])
        generateTable(2, 4, text["прайс"]["вип"]["пакеты"])
        generateThead("PLAYSTATION 5 VIP")
        generateTable(2, 3, text["прайс"]["сони-вп"], "прайс сони-вп")
    }
    else if(this.textContent == "железо") {
        scrollForMobileVersion("железо")
        clearAndDisplayTbIb()
        generateThead("Зал PC STANDART")
        generateTable(2, 6, text["пк"]["стандарт-1"])
	    generateThead("Зал PC STANDART")
        generateTable(2, 6, text["пк"]["стандарт-2"])
	    generateThead("Зал PC STANDART")
        generateTable(2, 6, text["пк"]["стандарт-3"])
	    generateThead("Зал PC STANDART")
        generateTable(2, 6, text["пк"]["стандарт-4"])
        generateThead("Зал PC VIP")
        generateTable(2, 6, text["пк"]["вип"])
    }
    else if(this.textContent == "коннект") {
        scrollForMobileVersion("коннект")
        tableBlock.style.display = "none"
        urlForRequest = "connect"
        akieItemsList(objConnect, ".items_block")
    }
}
function akieItemsList(list, block_selector) {
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
        appendItem(item, list)
    })
    block.style.display = ""
    tableBlock.textContent = ""
}
function clearAndDisplayTbIb() {
    tableBlock.style.display = ""
    tableBlock.textContent = ""
    itemsBlock.style.display = "none"
}
function scrollForMobileVersion(name) {
    if (screen.availWidth < screen.availHeight) {
        scrollDspl = scroll.style.display
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
