login_html = 
`
<div class="login_form">
<div class="form">
    <div class="form-field">
        <input type="username" placeholder="Username" required name="username">
    </div>
    <div class="form-field">
        <input type="password" placeholder="Password" required name = password>
    </div>
    <div class="form-field">
        <button class="btnl" onclick=loginUser type="submit" >Log in</button>
    </div>
</div>
`

function loginUser() {
    loginPass = document.querySelectorAll(".form-field > input")
    form = document.querySelector(".login_form")
    wall = document.querySelector("#wall_4")
    postDataToServerLoader([loginPass[0].value, loginPass[1].value], "/login", wall, function(cb) {
        console.log(cb)
        //loader = document.querySelector(".loader")
        if(cb != "Error") {
            user = JSON.parse(cb)
            console.log(user)
            body = document.querySelector("body")
            if(user["userGroupId"] == 4) {
                document.querySelectorAll("script")[1].remove()
                body.append(changeColor = document.createElement("script"))
                changeColor.src = "/static/javascript/admin/change_color.js"
                body.append(appItem = document.createElement("script"))
                appItem.src = "/static/javascript/admin/append_item.js"
                body.append(updDelItem = document.createElement("script"))
                updDelItem.src = "/static/javascript/admin/update_delete_item.js"

                f1Timeout = setTimeout( () => {
                    document.querySelectorAll(".gplace").forEach(
                        place => place.onclick = changeColor)
                    create_input_and_button()
                    akieItemsList(objNews, ".right_list")
                    akieItemsList(objNews, ".items_block")
                    //loader.remove()
                }, 200)
            }
            //console.log(cb)
            //loader.remove()
            if(user["userGroupId"] == 4  || user["userGroupId"] == 1) {
                body.append(usr_page = document.createElement("script"))
                usr_page.src = "/static/javascript/admin/user_page.js"

                f2Timeout = setTimeout( () => {
                    wall.style.backgroundColor = "black"
                    wall.append(menu = document.createElement("div"))
                    buttonsNames = ["профиль", "турнир", "статистика"]
                    buttonsNames.map(x => {
                        menu.append(el_ = document.createElement("a"))
                        el_.className = "button"           
                        el_.textContent = x
                        el_.onclick = user_page
                        menu.className = "menu"
                    })
        
                    wall.append(scroll = document.createElement("div"))
                    scroll.append(itemsBlock = document.createElement("div"))
                    itemsBlock.className = "right_list"
                    scroll.style.backgroundColor = "rgba(0,0,0,0.5)"
                    scroll.style.overflow = "scroll"
                    scroll.style.height = "95%"
                    scroll.style.color = "white"
                    scroll.className = "right_scroll"
                    scroll.style.height = "calc(100% - 2.2vw)"
                    akieItemsList(objNews, ".right_list")
                }, 150)
            }
        }
        else {
            //console.log(1)
            wall.innerHTML = login_html
            btn = document.querySelector(".btnl")
            btn.onclick = loginUser
            //console.log(cb)
        }
    })
}
