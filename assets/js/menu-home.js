function menuHome() {
  document.getElementById("menu-full-page").style.display = "block";
  document.getElementById("main-container").style.display = "none";
  document.getElementById("home").style.backgroundImage = "none";

  let links = document.getElementsByClassName("link-item");
  let lWidth = window.screen.width;

  let closeMenu = function () {
    document.getElementById("menu-full-page").style.display = "none";
    document.getElementById("main-container").style.display = "block";
    if (lWidth >= 1200) {
      document.getElementById("home").style.backgroundImage =
        "url(assets/images/blackvase-xl.jpg)";
    } else if (lWidth >= 768) {
      document.getElementById("home").style.backgroundImage =
        "url(assets/images/blackvase-lg.jpg)";
    } else {
      document.getElementById("home").style.backgroundImage =
        "url(assets/images/blackvase-md.jpg)";
    }
  };

  document.getElementById("close-icon").addEventListener("click", closeMenu);

  Array.from(links).forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
}
