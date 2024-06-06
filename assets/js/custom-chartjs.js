const purchasechart = document.getElementById('purchasechartcanvas').getContext('2d');
const purchasechartcanvas = new Chart(purchasechart, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'New York',
            data: [2, 5, 8, 12, 15, 6, 3, 10, 4],
            backgroundColor: ["#28cec6"]
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: '#000'
                }
            }
        },
        responsive: true,
        drawOnChartArea: false,
        scales: {
            xAxes: {
                stacked: true,
                ticks: {
                    display: false
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            yAxes: {
                stacked: true,
                ticks: {
                    display: false
                },
                grid: {
                    drawBorder: false,
                    display: false,
                }
            }
        },
    }
});

const variablePie = document.getElementById('repeatandcustomerscanvas').getContext('2d');
const repeatandcustomerscanvas = new Chart(variablePie, {
    type: 'doughnut',
    data: {
        labels: [
            'Repeat',
            'New'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 100],
            backgroundColor: ["#28cec6", "#6c757d"],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'right',
                display: true,
                labels: {
                    color: '#000'
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

const recent = document.getElementById('performance_recent_tab').getContext('2d');
const performance_recent_tab = new Chart(recent, {
    type: 'bar',
    data: {
        labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
        datasets: [{
            label: 'Recent Review',
            data: [2, 5, 8, 12, 15],
            backgroundColor: ["#28cec6"]
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: '#000'
                }
            }
        },
        responsive: true,
        drawOnChartArea: false,
        scales: {
            xAxes: {
                stacked: true,// this option is used to make the bars stacked
                ticks: {
                    display: true
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            yAxes: {
                stacked: true,
                ticks: {
                    display: true
                },
                grid: {
                    drawBorder: false,
                    display: false,
                }
            }
        },
    }
});

const overall = document.getElementById('performance_overall_tab').getContext('2d');
const performance_overall_tab = new Chart(overall, {
    type: 'bar',
    data: {
        labels: ['1 star', '2 star', '3 star', '4 star', '5 star'],
        datasets: [{
            label: 'Recent Review',
            data: [2, 10, 8, 15, 18],
            backgroundColor: ["#28cec6"]
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: '#000'
                }
            }
        },
        responsive: true,
        drawOnChartArea: false,
        scales: {
            xAxes: {
                ticks: {
                    display: true
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            yAxes: {
                beginAtZero: true,
                ticks: {
                    display: true
                },
                grid: {
                    drawBorder: false,
                    display: false,
                }
            }

        },
    }
});

const sentimentreview = document.getElementById('reviewsentiment').getContext('2d');
const reviewsentiment = new Chart(sentimentreview, {
    type: 'doughnut',
    data: {
        labels: [
            'A+',
            'B+'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 100],
            backgroundColor: ["#28cec6", "#6c757d"],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            legend: {
                position: 'right',
                display: true,
                labels: {
                    color: '#000'
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

const stackedbar = document.getElementById('stackedbarchartcanvas').getContext('2d');
const stackedbarchartcanvas = new Chart(stackedbar, {
    type: 'bar',
    data: {
        labels: ["Positive", "Negative"],
        datasets: [
            {
                label: "Replied",
                backgroundColor: ["#28cec6", "#28cec6"],
                borderColor: ["#28cec6", "#28cec6"],
                borderWidth: 1,
                data: [42, 56]
            },
            {
                label: "Not Replied",
                backgroundColor: ["#6c757d", "#6c757d"],
                borderColor: ["#6c757d", "#6c757d"],
                borderWidth: 1,
                data: [120, 52]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',//this option is used for place legend on the right side of bar chart
            }
        },
        scales: {
            xAxes: {
                stacked: true,// this option is used to make the bars stacked
                ticks: {
                    display: true
                },
                grid: {
                    drawBorder: false,
                    display: false,
                },
            },
            yAxes: {
                stacked: true,
                ticks: {
                    display: true
                },
                grid: {
                    drawBorder: false,
                    display: false,
                }
            }
        },
        title: {
            display: true,
            text: "Chart.js Stacked Bar Chart"
        }
    },
});

const ratingtrands = document.getElementById('ratingtrandschartcanvas').getContext('2d');
const ratingtrandschartcanvas = new Chart(ratingtrands, {
    type: 'line',
    data: {
        labels: [
            '19-12-2021',
            '26-12-2021',
            '16-01-2022',
            '13-02-2022',
            '20-02-2022',
            '27-02-2022',
            '06-03-2022',
            '03-04-2022',
            '10-04-2022',
            '24-04-2022',
            '15-05-2022',
            '22-05-2022',
            '29-05-2022',
            '12-06-2022'
        ],
        datasets: [
            {
                label: 'My Dataset',
                lineTension: 0.1,
                pointRadius: 0,
                backgroundColor: '#28cec6',
                borderColor: '#28cec6',
                borderWidth: 2,
                data: [5.0, 4.0, 5.0, 5.0, 4.0, 4.5, 5.0, 5.0, 5.0, 5.0, 2.0, 5.0, 4.0, 3.9],
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
});


