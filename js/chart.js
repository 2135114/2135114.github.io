console.log("hello")

const labels = [
    '平成12年',
    '平成17年',
    '平成22年',
    '平成27年',
    '令和2年',
];

const data = {
    labels: labels,
    datasets: [{
        label: '兵庫県の人口',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [5550574, 5590601, 5588133, 5534800, 5465002],
    },
    {
        label: '北海道の人口',
        backgroundColor: 'rgb(99, 255, 132)',
        borderColor: 'rgb(99, 255, 132)',
        data: [5683062, 5627737, 5506419, 5381733, 5224614],
    },
    {
        label: '千葉県の人口',
        backgroundColor: 'rgb(255, 132, 99)',
        borderColor: 'rgb(255, 132, 99)',
        data: [5926285, 6056462, 6216289, 6222666, 6284480],
    }
    ]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    $('#myChart'),
    config
);