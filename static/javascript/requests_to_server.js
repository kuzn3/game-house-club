function requestsToServer() {
    getDataFromServer("/get_data_place", function(responseText) {
        placesState = JSON.parse(responseText)
    })
    getDataFromServer("/get_data_news", function(responseText) {
        objNews = JSON.parse(responseText)
    })
    getDataFromServer("/get_data_akie", function(responseText) {
        objAkie = JSON.parse(responseText)
    })
    getDataFromServer("/get_data_connect", function(responseText) {
        objConnect = JSON.parse(responseText)
    })
    getDataFromServer("/static/json/data.json", function(responseText) {
        text = JSON.parse(responseText)
    })
    getDataFromServer("/static/json/color.json", function(responseText) {
        theme = JSON.parse(responseText)
        random = Math.floor(Math.random() * 3)
        timeoutF1 = setTimeout(() => {
        generatePageCode()
		setPlaces()
		setWalls()
		setTodo()
        login()
		}, 50)
    })
}
requestsToServer()
