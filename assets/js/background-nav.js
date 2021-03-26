$(function () {
  $(document).scroll(function () {
    let $nav = $(".company-name-green");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
