let ctx = document.querySelector('#myChart').getContext('2d');
let chart = new Chart (ctx, {
    type: 'line',

    data: {
        labels: ["asd", "fgh", "jkl","213"],
        datasets: [{
            label: "My first charset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [25, 21, 32, 19, 50],
        }]
    },
    options: { }
});