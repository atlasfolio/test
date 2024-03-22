document.addEventListener('DOMContentLoaded', function () {
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var chart1 = new Chart(ctx1, {
        // The type of chart we want to create
        type: 'bar',
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },
        // Configuration options go here
        options: {}
    });

    var ctx2 = document.getElementById('chart2').getContext('2d');
    var chart2 = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My Second dataset',
                backgroundColor: 'rgb(255, 205, 86)',
                borderColor: 'rgb(255, 205, 86)',
                data: [45, 30, 20, 12, 25, 10, 0],
                fill: false
            }]
        },
        options: {}
    });
});
