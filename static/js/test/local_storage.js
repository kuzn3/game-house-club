    var xhr = new XMLHttpRequest()
        xhr.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json", true)
        xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            localStorage.setItem("a", JSON.stringify(xhr.response))
            JSON.parse(localStorage.getItem("a"), (key, value) => {
                //console.log(key, value)
            })

        }}
        xhr.send()