$(function () {
  $(".main_slide").slick({
    arrows: false,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplay: true,
    fade: true,
  });

  $(".arrows .xi-arrow-left").on("click", function () {
    $(".menu_slide").slick("slickNext");
  });
  $(".arrows .xi-arrow-right").on("click", function () {
    $(".menu_slide").slick("slickPrev");
  });
});
