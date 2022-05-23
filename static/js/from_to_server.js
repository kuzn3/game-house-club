function get_data_from_server(url, cb) {
    var xhr = new XMLHttpRequest()
    xhr.open("GET", url, true)
    xhr.setRequestHeader('X-CSRFToken', csrf)
    xhr.timeout = 200;
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status == 200 || xhr.status == 304) {
                cb(xhr.responseText)
                console.log(xhr.response)
            }
            else {cb(Error)}
        }   
    }
    xhr.send()
}
function post_data_to_server(info, url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    xhr.setRequestHeader('X-CSRFToken', csrf)
    xhr.timeout = 200;
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if(xhr.status == 200) {cb(true); console.log(xhr.response)}
            else {cb(Error)}
        }
    }
    xhr.send("key=" + info[0] + "&value=" + info[1]);
}












