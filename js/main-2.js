google.load('visualization', '1', {
    packages: ['table']
})

var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://spreadsheets.google.com/tq?key=1uB2ytIPC4hX1C4BWYQZA8v-CnuYwRKenHYOT_L3p3U0&output=html&usp=sharing');
    query.setQuery('SELECT D ORDER BY A DESC LIMIT 1');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);
