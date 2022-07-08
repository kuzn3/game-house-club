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

function login_user() {
    login_pass = document.querySelectorAll(".form-field > input")
    form = document.querySelector(".login_form")
    wall = document.querySelector("#wall_4")
    post_data_to_server_loader([login_pass[0].value, login_pass[1].value], "/login", wall, function(cb) {
        //console.log(cb)
        // cb = {
        //     "city": "Липецк",
        //     "country": "Российская Федереация",
        //     "createdTime": "2022-06-21T06:00:56.3744802",
        //     "disabledDate": null,
        //     "email": "Эмаил@mail.ru",
        //     "firstName": "Профиль",
        //     "id": 9464,
        //     "lastName": "Для теста",
        //     "mobilePhone": "+3",
        //     "modifiedById": 1,
        //     "modifiedTime": "2022-06-23T03:33:22.0028017",
        //     "phone": "+1",
        //     "userGroupId": 4,
        //     "username": "test1"
        // }
        //loader = document.querySelector(".loader")
        if(cb != "Error") {
            user = JSON.parse(cb)
            //user = cb
            console.log(user)
            body = document.querySelector("body")
            if(user["userGroupId"] == 4) {
                document.querySelectorAll("script")[1].remove()
                body.append(change_color = document.createElement("script"))
                change_color.src = "/static/javascript/admin/change_color.js"
                body.append(app_item = document.createElement("script"))
                app_item.src = "/static/javascript/admin/append_item.js"
                body.append(upd_del_item = document.createElement("script"))
                upd_del_item.src = "/static/javascript/admin/update_delete_item.js"

                timeout_F1 = setTimeout( () => {
                    document.querySelectorAll(".gplace").forEach(
                    place => place.onclick = change_color)
                    create_input_and_button()
                    akie_items_list(obj_news, ".items_block")
                    //akie_items_list(obj_news, ".right_list")
                    //loader.remove()
                }, 200)
            }
            //console.log(cb)
            //loader.remove()
            if(user["userGroupId"] == 4  || user["userGroupId"] == 1) {
                body.append(usr_page = document.createElement("script"))
                usr_page.src = "/static/javascript/admin/user_page.js"

                timeout_F2 = setTimeout( () => {
                    wall.style.backgroundColor = "black"
                    wall.append(menu = document.createElement("div"))
                    buttons_names = ["профиль", "🔒турнир", "🔒статистика"]
                    buttons_names.map(x => {
                        menu.append(el_ = document.createElement("a"))
                        el_.className = "button"           
                        el_.textContent = x
                        el_.onclick = user_page
                        menu.className = "menu"
                    })
        
                    wall.append(scroll = document.createElement("div"))
                    scroll.append(items_block = document.createElement("div"))
                    items_block.className = "right_list"
                    scroll.style.backgroundColor = "rgba(0,0,0,0.5)"
                    scroll.style.overflow = "scroll"
                    scroll.style.height = "95%"
                    scroll.style.color = "white"
                    scroll.className = "right_scroll"
                    scroll.style.height = "calc(100% - 2.2vw)"
                    profile(".right_list")   
                }, 150)
            }
            form.remove()
        }
        else {
            //console.log(1)
            wall.innerHTML = login_html
            btn = document.querySelector(".btnl")
            btn.onclick = login_user
            //console.log(cb)
        }
   })
}
