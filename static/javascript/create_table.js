function generateThead(tableName) {
    var table = document.createElement("table")
    table.append(tableHead = document.createElement("thead"))
    tableHead.append(tableHeadRow = document.createElement("tr"))
    tableHeadRow.append(tableHeadColumn = document.createElement("th"))
    tableHeadColumn.appendChild(document.createTextNode(tableName))
    textBlock.appendChild(table)
}

function generateTable(rows, columns, info) {
    var table = document.createElement("table")
    var tableBody = document.createElement("tbody")

    data = [Object.keys(info),Object.values(info)]
    appendTextInTable(rows, columns, data, tableBody)
    
    table.append(tableBody)
    textBlock.append(table)
    table.style.border = "2"
}

function appendTextInTable(rows, columns, info, tableBody) {
    console.log(1)
    for(var i = 0; i < rows; i++) {
        console.log(2)
        var row = document.createElement("tr")
        for(var j = 0; j < columns; j++) {
            console.log(3)
            var cell = document.createElement("td")
            var cellText = document.createTextNode(info[i][j])
            cell.appendChild(cellText)
            row.appendChild(cell)
            //row.contentEditable = "true"
            //row.oninput = () => {console.log(//EventClick Mozilla & Safari
            //onerror UPDATE LIST ?
            //.....html + js for User ~
        }
        tableBody.appendChild(row)
    }
}

function cellUpdate() {
    info = [this.id, [this.textContent, this.parentElement.parentElement.parentElement.className]] 
        postDataToServer(info, "/update_table", function(responseState) {
            if(responseState == Error) {
                console.error("error")
            }
        })
}