 
index = document.querySelector("body").innerHTML
login = 
    `
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
wall = document.querySelector("#wall_3")
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
    body.innerHTML = login
    btn = document.querySelector(".btnl")
    btn.onclick = () => {
        loginPass = document.querySelectorAll(".form-field > input")
        login = loginPass[0].value
        pass = loginPass[1].value
        postDataToServer([login, pass], "/login", function(cb){
            if(cb != Error) {
                console.log(cb)
                body.innerHTML = index
                document.querySelectorAll("script")[1].remove()
                body.append(changeColor = document.createElement("script"))
                changeColor.src = "/static/javascript/admin/change_color.js"
                body.append(appendItem = document.createElement("script"))
                appendItem.src = "/static/javascript/admin/append_item.js"
                body.append(updateDeleteItem = document.createElement("script"))
                updateDeleteItem.src = "/static/javascript/admin/update_delete_item.js"

                placeBloks = document.getElementsByClassName("gplace")
        
                for ([key, value] of places) {
                    style = value == "free" ? theme[random].free : theme[random].busy
                    placeBloks[key - 1].style.background = style
                }

                document.querySelectorAll(".button").forEach(
                    el => el.onclick = navigationBar)

                f1Timeout = setTimeout( x => {
                    akieItemsList(objNews)
                    calculateColorBlockSize()   
                    document.querySelectorAll(".gplace").forEach(
                        place => place.onclick = changeColor)
                }, 150)
            }
            else(console.log(cb))
        })
    }
}
