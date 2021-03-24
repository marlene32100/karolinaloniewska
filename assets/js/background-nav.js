$(function () {
  $(document).scroll(function () {
    var $nav = $(".company-name-green");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
