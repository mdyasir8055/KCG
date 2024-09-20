const ctx = document.getElementById('weeklyComparison').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['17 Sun', '18 Mon', '19 Tue', '20 Wed', '21 Thu', '22 Fri'],
        datasets: [{
            label: 'This week',
            data: [200000, 50000, 10000, 200000, 50000, 250000],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }, {
            label: 'Last week',
            data: [100000, 60000, 30000, 100000, 50000, 150000],
            backgroundColor: 'rgba(201, 203, 207, 0.5)',
            borderColor: 'rgba(201, 203, 207, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
