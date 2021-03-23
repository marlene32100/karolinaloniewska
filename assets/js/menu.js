function menu() {
  document.getElementById("menu-full-page").style.display = "block";
  document.getElementById("main-container").style.display = "none";
  document.getElementById("landing").style.backgroundImage = "none";

  let links = document.getElementsByClassName("link-item");
  let lWidth = window.screen.width;

  let closeMenu = function () {
    document.getElementById("menu-full-page").style.display = "none";
    document.getElementById("main-container").style.display = "block";
    if (lWidth >= 1200) {
      document.getElementById("landing").style.backgroundImage =
        "url(assets/images/bathroom-xl.jpg)";
    } else if (lWidth >= 768) {
      document.getElementById("landing").style.backgroundImage =
        "url(assets/images/bathroom-l.jpg)";
    } else {
      document.getElementById("landing").style.backgroundImage =
        "url(assets/images/bathroom-md.jpg)";
    }
  };

  document.getElementById("close-icon").addEventListener("click", closeMenu);

  Array.from(links).forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
}
