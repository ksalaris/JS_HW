//from data.js
var tableData = data;
var tbody = d3.select("tbody");
data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);})});
console.log(data);