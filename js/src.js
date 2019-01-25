// Expand subMenu-----------------------------------------
var mainMenu = document.querySelector('.main-menu');
var subMenus = document.querySelectorAll('.sub-menu');

for (var i = 0; i < subMenus.length; i++) {
  var currentElement = subMenus[i];
  currentElement.previousElementSibling.addEventListener("click", function () {
  currentElement.classList.toggle('expanded');
  currentElement.previousElementSibling.classList.toggle('is-active');
  })
}
  