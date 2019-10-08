google.load('visualization', '1', {
    packages: ['table']
})

var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/10DA-MZKafviShHTI1sz8J3PNR6TfdDMcHYDsQ7caRNY/edit?usp=sharing');
    query.setQuery('SELECT B ORDER BY A DESC LIMIT 1');
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
