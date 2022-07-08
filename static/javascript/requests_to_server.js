function requests_to_server() {
    get_data_from_server("/static/json/data.json", function(responseText) { 
        text = JSON.parse(responseText)
    })
    get_data_from_server("/get_data_news", function(responseText) {
        obj_news = JSON.parse(responseText)
    })
    get_data_from_server("/get_data_akie", function(responseText) {
        obj_akie = JSON.parse(responseText)
    })
    get_data_from_server("/get_data_connect", function(responseText) {
        obj_connect = JSON.parse(responseText)
    })
    get_data_from_server("/static/json_from_APC/hostId_hostName.json", function(responseText) {
        obj_host_names = JSON.parse(responseText)
    })
    get_data_from_server("/static/json/color.json", function(responseText) {
        theme = JSON.parse(responseText)
        random = Math.floor(Math.random() * 3)
        timeout_F1 = setTimeout(() => {
        generate_page_code()
		set_places()
		set_walls()
		set_todo()
		}, 0)
    })
}
requests_to_server()
