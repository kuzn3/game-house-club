function generate_thead(table_name) {
    var tbl = document.createElement("table")
    tbl.append(tbl_head = document.createElement("thead"))
    tbl_head.append(table_head_row = document.createElement("tr"))
    table_head_row.append(tbl_head_column = document.createElement("th"))
    tbl_head_column.appendChild(document.createTextNode(table_name))
    text_block.appendChild(tbl)
}

function generate_table(rows, columns, info) {
    var tbl = document.createElement("table")
    var tbl_body = document.createElement("tbody")

    data = [Object.keys(info),Object.values(info)]

    append_text_in_table(rows, columns, data, tbl_body)
    
    tbl.appendChild(tbl_body)
    text_block.appendChild(tbl)
    tbl.style.border = "2"
}

function append_text_in_table(rows, columns, info, tbl_body) {
    for(var i = 0; i < rows; i++) {
        var row = document.createElement("tr")
        for(var j = 0; j < columns; j++) {
            var cell = document.createElement("td")
            var cellText = document.createTextNode(info[i][j])
            cell.appendChild(cellText)
            row.appendChild(cell)
            //row.contentEditable = "true"
            //row.oninput = () => {console.log(//EventClick Mozilla & Safari
            //onerror UPDATE LIST ?
            //.....html + js for User ~
        }
        tbl_body.appendChild(row)
    }
}