 function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
  // script start

  //get color-box and change-color-btn
  let colorBox = document.getElementById("color-box");
  let changeColorBtn = document.getElementById("change-color-btn");

  changeColorBtn.addEventListener("click", function() {
    let randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor
  })
  
});

