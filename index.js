// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;

// }

document.addEventListener("DOMContentLoaded", function () {
  var data = {
    labels: ["20", "", "25", "", "30", "", "35", "", "40", "", "60", "", "65"],
    datasets: [
      {
        backgroundColor: "#0001a2",
        data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
        barThickness: 20,
        borderWidth: 1,
        borderSkipped: true,
      },
      {
        label: "Dataset 2",
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
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
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

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
};
