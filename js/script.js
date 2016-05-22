"use strict"
function clickButton (event) {
  //this.textContent = "clicked";
  document.getElementById("demo").innerHTML = "ClickedD";
}

document.querySelector("li")
  .addEventListener("click", clickButton);
