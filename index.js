// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;

// }

document.addEventListener("DOMContentLoaded", function () {
  changeTab(document.querySelector('.navIcon.active'));
});

function changeTab(clickedTab) {
  var tabs = document.querySelectorAll('.navIcon');
  tabs.forEach(function (tab) {
      tab.classList.remove('active');
  });
  clickedTab.classList.add('active');
}
