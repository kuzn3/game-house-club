function user_page() {
    items_block = document.querySelector(".right_list")

    if(this.textContent == "профиль") {
        items_block.innerHTML = ""
        url_for_request = "profile"
        profile(".right_list")    
    }
    else if(this.textContent == "🔒турнир") {
        url_for_request = "tournament"
    }
    else if(this.textContent == "🔒статистика") {
        url_for_request = "statistic"
    }
}

function profile(items_block) {
    items_block = document.querySelector(items_block)
    items_block.append(user_profile = document.createElement("div"))
    user_profile.className = "user_profile"
    user_profile.append(user_image = document.createElement("img"))
    user_image.className = "user_image"
    user_image.src = "/static/user.png"
    user_profile.append(user_info = document.createElement("div"))
    user_info.className = "user_info"


    console.log(user)
    for(let i = 0; i < 10; i++) {
        if(i == 0) {
            user_info.append(span = document.createElement("h1"))
            span.textContent = user["username"]
        }
        if(i == 1) {
            user_info.append(span = document.createElement("h5"))
            span.textContent = user["country"] + ", " + user["city"] + ", " + user["firstName"] + " " + user["lastName"] 
        }
    }
    //postDataToServer()

    //generateTable(10, 2, user)
    items_block.append(user_events = document.createElement("div"))
    user_events.className = "user_events"

    user_events.append(cupon_1 = document.createElement("div"))
    cupon_1.textContent = obj_akie[Math.floor(Math.random() * Object.keys(obj_akie).length)]
    cupon_1.className = "user_cupon"
    console.log(cupon_1.width, cupon_1.height)
    user_events.append(cupon_2 = document.createElement("img"))
    console.log(obj_akie)
    cupon_2.src = "/static/cupon.jpg"
    cupon_2.className = "user_cupon"

}
