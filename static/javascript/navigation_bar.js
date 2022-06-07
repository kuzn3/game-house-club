function navigationBar() {
    buttonsGroup = document.getElementsByClassName("button")
    textBlock = document.querySelector(".text_block")
    itemsBlock = document.querySelector(".items_block")

    if(this.textContent == "новости") {
        scrollForMobileVersion("новости")
        textBlock.style.display = "none"
        urlForRequest = "news"
        akieItemsList(objNews)
    }
    else if(this.textContent == "эвенты") {
        scrollForMobileVersion("эвенты")
        textBlock.style.display = "none"
        urlForRequest = "akie"
        akieItemsList(objAkie)
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
        textBlock.style.display = "none"
        urlForRequest = "connect"
        akieItemsList(objConnect)
    }
}
function akieItemsList(list) {
    document.querySelector("ul").remove()
    ul = document.createElement("ul")
    try {itemsBlock.insertBefore(ul, input)}
    catch {itemsBlock.appendChild(ul)}
    Array.from(Object.values(list), item => {
        appendItem(item, list)
    })
    itemsBlock.style.display = ""
    textBlock.textContent = ""
}
function clearAndDisplayTbIb() {
    textBlock.style.display = ""
    itemsBlock.style.display = "none"
    textBlock.textContent = ""
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
                console.log(scroll.style.display)
            }
        }
        else if(scroll.style.display == "none") {
            scroll.style.display = "block"
        }
        localStorage.setItem("menu_select", name)
    }
}
