// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;

// }

document.addEventListener("DOMContentLoaded", function () {
  changeTab(document.querySelector(".navIcon.active"));
});

function changeTab(clickedTab) {
  var tabs = document.querySelectorAll(".navIcon");
  tabs.forEach(function (tab) {
    tab.classList.remove("active");
  });
  clickedTab.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("custom-stacked-chart").getContext("2d");

  const data = {
    labels: ["20", "", "25", "", "30", "", "35", "", "40", "", "60", "", "70"],
    datasets: [
      {
        label: "Employer",
        backgroundColor: "#00039C",
        data: [30, 50, 20],
      },
      {
        label: "Employee",
        backgroundColor: "#433AFB",
        data: [10, 40, 30],
      },
      {
        label: "Total interest",
        backgroundColor: "#55B2FF",
        data: [20, 10, 50],
      },
    ],
  };

  const options = {
    scales: {
      x: { stacked: true },
      y: {
        stacked: true,
        ticks: {
          beginAtZero: true, 
        },
      },
    },
  };

  const stackedChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
});
