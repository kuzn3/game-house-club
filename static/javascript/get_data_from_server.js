function get_data_from_server(url, cb) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.setRequestHeader('JWT', sessionStorage.getItem("token"))
    xhr.timeout = 200;
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status == 200 || xhr.status == 304) {
                cb(xhr.responseText)
            }
            else {cb(Error)}
        }   
    }
    xhr.send()
}












