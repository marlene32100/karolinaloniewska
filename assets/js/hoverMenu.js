document.getElementById("hamburger").addEventListener("mouseover", function () {
  $(this).addClass("fa-spin");
});
document.getElementById("hamburger").addEventListener("mouseout", function () {
  $(this).removeClass("fa-spin");
});
