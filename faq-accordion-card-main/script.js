"use strict";

const openButton = document.querySelectorAll(".btn");

for (let i = 0; i < openButton.length; i++) {
  openButton[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
