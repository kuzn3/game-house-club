function get_data_from_server(url, cb) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url, false)
    //xhr.setRequestHeader('JWT', sessionStorage.getItem("JWT"))
    //xhr.setRequestHeader('X-CSRFToken', csrf_token)
    //xhr.timeout = 200;
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status == 200 || xhr.status == 304) {
                cb(xhr.responseText)
            }
            else {
                location.reload()
                cb(Error)
            }
        }   
    }
    xhr.send()
}












