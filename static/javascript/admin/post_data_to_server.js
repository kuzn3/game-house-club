function post_data_to_server(info, url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    xhr.setRequestHeader('JWT', sessionStorage.getItem("JWT"))
    xhr.setRequestHeader('X-CSRFToken', csrf_token)
    xhr.timeout = 200;
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status == 200) {cb(true)}
            else {cb(Error)}
        }
    }
    xhr.send("key=" + info[0] + "&value=" + info[1]);
}
