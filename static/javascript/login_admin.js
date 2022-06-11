login_html = 
`
<div class=\"loader\" style="display: none;"><span class=\"gear\">⚙</span></div>
<div class="form">
    <div class="logol">GAME HOUSE ADMIN</div>
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
    console.log(wall)
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
        btn.onclick = () => {
            loginPass = document.querySelectorAll(".form-field > input")
            form.style.display = "none"
            loader.style.display = "block"
            postDataToServer([loginPass[0].value, loginPass[1].value], "/login", function(cb) {
                if(cb != Error) {
                    console.log(cb)
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
                        akieItemsList(objNews)
                        calculateColorBlockSize()   
                        document.querySelectorAll(".gplace").forEach(
                            place => place.onclick = changeColor)
                        loader.remove()
                    }, 75)
                }
                else {
                    loader.style.display = "none"
                    form.style.display = "block"
                    console.log(cb)
                }
            })
        }
    }
}