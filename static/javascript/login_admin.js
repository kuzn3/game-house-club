login_html = 
`
<div class=\"loader\" style="display: none;"><span class=\"gear\">⚙</span></div>
<div class="form">
    <div class="logol">GAME HOUSE 🕹️</div>
    <div class="form-field">
        <input type="username" placeholder="Username" required name="username">
    </div>
    <div class="form-field">
        <input type="password" placeholder="Password" required name = password>
    </div>
    <div class="form-field">
        <button class="btnl" type="submit" >Log in</button>
    </div>
</div>
`

function login() {
    index = document.querySelector("body").innerHTML
    wall = document.querySelector("#wall_3")
    //console.log(wall)
    wall.onclick = () => {
        head = document.querySelector("head")
        head.append(style = document.createElement("style"))
        style.innerHTML = 
        `
        .btnl:hover {
            background-color: ${theme[random].free};
        }
        .logol {
            text-shadow: 0.15vw 0.15vw ${theme[random].free};
        }
        `
        body.innerHTML = login_html
        loader = document.querySelector(".loader")
        form = document.querySelector(".form")
        btn = document.querySelector(".btnl")
        btn.onclick = loginAdmin
        
    }
}

function loginAdmin() {
    loginPass = document.querySelectorAll(".form-field > input")
    form.style.display = "none"
    loader.style.display = "block"
    postDataToServer([loginPass[0].value, loginPass[1].value], "/login", function(cb) {
        if(cb != Error) {
            //console.log(cb)
            loader.remove()
            body.innerHTML = index
            itemsBlock = document.querySelector(".items_block")
            itemsBlock.style.display = "none"
            scroll = document.querySelector(".scroll")
            scroll.innerHTML += "<div class=\"loader\"><span class=\"gear\">⚙</span></div>"
            loader = document.querySelector(".loader")
            loader.style.position = "relative"
            document.querySelectorAll("script")[1].remove()
            body.append(changeColor = document.createElement("script"))
            changeColor.src = "/static/javascript/admin/change_color.js"
            body.append(appItem = document.createElement("script"))
            appItem.src = "/static/javascript/admin/append_item.js"
            body.append(updDelItem = document.createElement("script"))
            updDelItem.src = "/static/javascript/admin/update_delete_item.js"
            //console.log(appItem.readyState)

            document.querySelectorAll(".button").forEach(
                el => el.onclick = navigationBar)

            f1Timeout = setTimeout( () => {
                create_input_and_button()
                akieItemsList(objNews, ".items_block")
                calculateColorBlockSize()   
                document.querySelectorAll(".gplace").forEach(
                    place => place.onclick = changeColor)
                loader.remove()
            }, 75)
        }
        else {
            loader.style.display = "none"
            form.style.display = "block"
            //console.log(cb)
        }
    })
}


function loginUser() {
    loginPass = document.querySelectorAll(".form-field > input")
    form = document.querySelector(".form")
    //console.log(loginPass)
    postDataToServer([loginPass[0].value, loginPass[1].value], "/login", function(cb) {
        if(cb != Error) {
            el = document.querySelector("#wall_4")
            //console.log(cb)
            loader.remove()
            form.remove()
            el.style.backgroundColor = "black"
            el.append(menu = document.createElement("div"))
            buttonsNames = ["профиль", "турнир", "статистика", "выход"]
            buttonsNames.map(x => {
                menu.append(el_ = document.createElement("a"))
                el_.className = "button"           
                el_.textContent = x
                el_.onclick = navigationBar
                menu.className = "menu"
            })

            el.append(scroll = document.createElement("div"))
            scroll.append(itemsBlock = document.createElement("div"))
            itemsBlock.className = "right_list"
            scroll.style.backgroundColor = "rgba(0,0,0,0.5)"
            scroll.style.overflow = "scroll"
            scroll.style.height = "95%"
            scroll.style.color = "white"
            akieItemsList(objNews, ".right_list")
        }
        else {
            loader.style.display = "none"
            form.style.display = "block"
            //console.log(cb)
        }
    })
}
