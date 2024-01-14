document.addEventListener("DOMContentLoaded", function () {
  changeTab(document.querySelector(".navIcon.active"));
  changeTab(document.querySelector(".navIcon.active"));
});

function changeTab(clickedTab) {
  var tabs = document.querySelectorAll(".navIcon");
  var tabs = document.querySelectorAll(".navIcon");
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
    tab.classList.remove("active");
  });
  clickedTab.classList.add("active");
  clickedTab.classList.add("active");
}
document.addEventListener("DOMContentLoaded", function () {
  var data = {
    labels: ["20", "", "25", "", "30", "", "35", "", "40", "", "60", "", "65"],
    datasets: [
      {
        label: false,
        backgroundColor: "#0001a2",
        data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
        barThickness: 20,
        borderWidth: 1,
        borderSkipped: true,
      },
      {
        label: null,
        backgroundColor: "#493afd",
        data: [12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72],
        barThickness: 20,
        borderWidth: 0,
      },
      {
        label: "Dataset 3",
        backgroundColor: "#73b0ff",
        data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 170],
        barThickness: 20,
        borderWidth: 0,
      },
    ],
  };
  var options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        border: {
          dash: [3, 3],
          drawBorder: false,
        },
        grid: {
          color: "lightgrey",
        },
        ticks: {
          callback: function (value, index, values) {
            if (value === 0) return "$0";
            else if (value === 100) return "$100";
            else if (value === 200) return "$200";
            else if (value === 300) return "$300";
            else return "";
          },
          stepSize: 150,
        },
      },
    },
  };
  var ctx = document.getElementById("stackedBarChart").getContext("2d");

  var myChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var data = {
    labels: ["20", "25", "30", "35", "40", "60", "65"],
    datasets: [
      {
        label: false,
        backgroundColor: "#0001a2",
        data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
        barThickness: 20,
        borderWidth: 1,
        borderSkipped: true,
      },
      {
        label: null,
        backgroundColor: "#493afd",
        data: [12, 17, 22, 27, 32, 37, 42, 47, 52, 57, 62, 67, 72],
        barThickness: 20,
        borderWidth: 0,
      },
      {
        label: "Dataset 3",
        backgroundColor: "#73b0ff",
        data: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
        barThickness: 20,
        borderWidth: 0,
      },
    ],
  };
  var options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        border: {
          dash: [3, 3],
          drawBorder: false,
        },
        grid: {
          color: "lightgrey",
        },
        ticks: {
          callback: function (value, index, values) {
            if (value === 0) return "$0";
            else if (value === 100) return "$100";
            else if (value === 200) return "$200";
            else if (value === 300) return "$300";
            else return "";
          },
          stepSize: 100,
        },
      },
    },
  };
  var ctx = document.getElementById("mobileStackedChart").getContext("2d");

  var myChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const indicators = [
    {
      circularProgress: "average-Progress",
      progressValue: "average-value",
      progressEndValue: 78,
    },
    {
      circularProgress: "top-progress",
      progressValue: "top-value",
      progressEndValue: 95,
    },
    {
      circularProgress: "mine-progress",
      progressValue: "mine-value",
      progressEndValue: 59,
    },
  ];

  function animateProgress(
    circularProgressId,
    progressValueId,
    progressEndValue
  ) {
    let circularProgress = document.getElementById(circularProgressId);
    let progressValue = document.getElementById(progressValueId);
    let progressStartValue = 0;
    let speed = 10;

    let progress = setInterval(() => {
      progressStartValue++;

      progressValue.textContent = `${progressStartValue}%`;
      circularProgress.style.background = `conic-gradient(#00D9AF ${
        progressStartValue * 3.6
      }deg, #ededed 0deg)`;

      if (progressStartValue === progressEndValue) {
        clearInterval(progress);
      }
    }, speed);
  }

  indicators.forEach((indicator) => {
    animateProgress(
      indicator.circularProgress,
      indicator.progressValue,
      indicator.progressEndValue
    );
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("output");
  output.innerHTML = slider.value;
  slider.addEventListener("input", function () {
    output.innerHTML = `${this.value}%`;
    var percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.style.background = `linear-gradient(to right, lightskyblue ${percentage}%, #d3d3d3 ${percentage}%)`;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("ageRange");
  var output = document.getElementById("ageOutput");
  output.innerHTML = slider.value;
  slider.addEventListener("input", function () {
    output.innerHTML = this.value;
    var percentage = ((this.value - this.min) / (this.max - this.min)) * 100;
    this.style.background = `linear-gradient(to right, lightskyblue ${percentage}%, #d3d3d3 ${percentage}%)`;
  });
});