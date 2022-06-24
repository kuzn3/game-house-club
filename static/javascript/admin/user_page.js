function user_page() {
    items_block = document.querySelector(".right_list")

    if(this.textContent == "профиль") {
        console.log(1)
        items_block.innerHTML = ""
        urlForRequest = "profile"
        profile()
        
    }
    else if(this.textContent == "турнир") {
        console.log(2)
        scrollForMobileVersion("турнир")
        urlForRequest = "tournament"
        akieItemsList(objAkie, ".right_list")
    }
    else if(this.textContent == "статистика") {
        console.log(3)
        scrollForMobileVersion("статистика")
        urlForRequest = "statistic"
        akieItemsList(objConnect, ".right_list")
    }
}

function profile() {
    items_block.append(user_profile = document.createElement("div"))
    user_profile.className = "user_profile"
    user_profile.append(user_image = document.createElement("img"))
    user_image.className = "user_image"
    user_image.src = "/static/user.png"
    user_profile.append(user_info = document.createElement("div"))
    user_info.className = "user_info"
    user = Object.entries(user)
    console.log(user)
    //postDataToServer()
    for(el of Object.entries(user)) {
            console.log(el)
            user_profile.append(string = document.createElement("div"))
            string.className = "user_info"
            string.textContent = el[1][1]
            string.id = el[1][0]
        }
    items_block.append(events = document.createElement("div"))
    events.className = "events"

}