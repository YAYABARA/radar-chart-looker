const myViz = new dscc.Component();
const ctx = document.getElementById('myChart').getContext('2d');

function drawChart(data) {
    const labels = data.tables.DEFAULT.map(row => row.dimensions[0]);
    const values = data.tables.DEFAULT.map(row => row.metrics[0]);

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Performance',
                data: values,
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.2)'
            }]
        }
    });
}

myViz.onMessage(drawChart);
