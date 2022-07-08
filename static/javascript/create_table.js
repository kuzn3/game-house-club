function generate_thead(table_name) {
    var table = document.createElement("table")
    table.append(table_head = document.createElement("thead"))
    table_head.append(table_head_row = document.createElement("tr"))
    table_head_row.append(table_head_column = document.createElement("th"))
    table_head_column.appendChild(document.createTextNode(table_name))
    table_block.appendChild(table)
}

function generate_table(rows, columns, info) {
    var table = document.createElement("table")
    var table_body = document.createElement("tbody")

    data = [Object.keys(info),Object.values(info)]
    append_text_in_table(rows, columns, data, table_body)
    
    table.append(table_body)
    table_block.append(table)
    table.style.border = "2"
}

function append_text_in_table(rows, columns, info, table_body) {
    //console.log(1)
    //console.table(info)
    for(var i = 0; i < rows; i++) {
        //console.log(2)
        var row = document.createElement("tr")
        for(var j = 0; j < columns; j++) {
            //console.log(3)
            var cell = document.createElement("td")
            var cellText = document.createTextNode(info[i][j])
            cell.appendChild(cellText)
            row.appendChild(cell)
            //row.contentEditable = "true"
            //row.oninput = () => {console.log(//EventClick Mozilla & Safari
            //onerror UPDATE LIST ?
            //.....html + js for User ~
        }
        table_body.appendChild(row)
    }
}

function cell_update() {
    info = [this.id, [this.textContent, this.parentElement.parentElement.parentElement.className]] 
    post_data_to_server(info, "/update_table", function(responseState) {
        if(responseState == Error) {
            console.error("error")
        }
    })
}