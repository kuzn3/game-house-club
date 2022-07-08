function post_data_to_server_loader(info, url, el, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    //xhr.setRequestHeader('JWT', sessionStorage.getItem("JWT"))
    //xhr.setRequestHeader('X-CSRFToken', csrf_token)
    //xhr.timeout = 500;
    xhr.onloadstart = function() {
    console.log(1)
       el.innerHTML = `<div class=\"loader\""><span class=\"gear\">⚙</span></div>`
       loader = document.querySelector(".loader")
    }
    xhr.onreadystatechange = function() {
        xhr.onloadend = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    //console.log(xhr.response)
                    if(xhr.response != false) {
                        console.log(1)
                        console.log(xhr.response)
                        cb(xhr.response)
                        loader.remove()
                    }
                }
                else {
                    cb("Error")
                    loader.remove()
                    console.log(xhr.response)
                }
            }
        }
    }
    xhr.send("key=" + info[0] + "&value=" + info[1]);
}

function post_data_to_server(info, url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    //xhr.setRequestHeader('JWT', sessionStorage.getItem("JWT"))
    //xhr.setRequestHeader('X-CSRFToken', csrf_token)
    xhr.timeout = 500;
    xhr.onreadystatechange = function() {
        xhr.onloadend = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    console.log(xhr.response)
                    if(xhr.response != "") {
                        cb(xhr.response)
                    }
                }
            }
            else {
                cb("Error")
            }
            //loader.remove()
        }

    }
    xhr.send("key=" + info[0] + "&value=" + info[1]);
}