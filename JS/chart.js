// Chart.js
// barChart
var barChartData = {
  labels: [
    "Wk 1",
    "Wk 2",
    "Wk 3",
    "Wk 4",
    "Wk 5"
  ],
  datasets: [
    {
      label: "InstaSkool",
      backgroundColor: "#0551A7",
      borderColor: "#0551A7",
      borderWidth: 0,
      data: [80, 76, 65, 78, 95]
    },
    {
      label: "InstaSkool Virtual",
      backgroundColor: "rgba(5, 81, 167, 0.5)",
      borderColor: "rgba(5, 81, 167, 0.5)",
      borderWidth: 0,
      data: [55, 60, 73, 50, 75]
    },
  ]
};

var chartOptions = {
  responsive: true,
  legend: {
    position: "top"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        stepSize: 25
      }
    }]
  }
}

var donutChartData = {
  labels: [
    "Primary Classes",
    "JSS Classes",
    "SSS Classes",
  ],
  datasets: [
    {
      label: "Primary Classes",
      backgroundColor: [
        "rgba(235, 0, 27, 1)",
        "rgba(234, 115, 39, 1)",
        "rgba(5, 81, 167, 1)"
      ],
      borderColor: "rgba(235, 0, 27, 1)",
      borderWidth: 0,
      data: [50, 25, 25]
    },
  ]
}
var donutOptions = {
responsive: true,
legend: {
  display: false
},
}

var lineChartData = {
  labels: [
    "Wk 1",
    "Wk 2",
    "Wk 3",
    "Wk 4",
    "Wk 5"
  ],
  datasets: [
    {
      label: "Primary Classes",
      backgroundColor: "rgba(234, 115, 39, 1)",
      borderColor: "rgba(234, 115, 39, 1)",
      borderWidth: 0,
      data: [80, 76, 65, 78, 95],
      fill: false,
    },
    {
      label: "JSS Classes",
      backgroundColor: "rgba(235, 0, 27, 1)",
      borderColor: "rgba(235, 0, 27, 1)",
      borderWidth: 0,
      data: [55, 60, 73, 50, 75],
      fill: false,
    },
    {
      label: "SSS Classes",
      backgroundColor: "rgba(5, 81, 167, 1)",
      borderColor: "rgba(5, 81, 167, 1)",
      borderWidth: 0,
      data: [50, 65, 70, 50, 40],
      fill: false,
    },
  ]
};

var linechartOptions = {
  responsive: true,
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        stepSize: 15
      }
    }]
  }
}


window.onload = function() {
  var ctx = document.getElementById("barChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: chartOptions
  });
  var donut = document.getElementById("donutChart").getContext("2d");
  window.myBar = new Chart(donut, {
    type: "doughnut",
    data: donutChartData,
    options: donutOptions
  });
  var line = document.getElementById("lineChart").getContext("2d");
  window.myBar = new Chart(line, {
    type: "line",
    data: lineChartData,
  });
};


