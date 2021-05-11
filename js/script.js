$(document).ready(function () {
  // show nav
  $("i.icon").click(function () {
    $(".list").slideToggle();
  });
});

// sticky navbar
$(window).scroll(function () {
  var scr = $(this).scrollTop();
  if (scr > 100) {
    $(".header").addClass("sticky");
  } else {
    $(".header").removeClass("sticky");
  }
});

// nav2 collor active on click li
$(".nav2 li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");

  var allId = $(this).attr("id");
  if (allId === "all") {
    $(".portfolio-images > div").fadeIn();
  } else {
    $(".portfolio-images > div").fadeOut();
    $(".portfolio-images")
      .contents()
      .filter("." + allId)
      .fadeIn();
  }
});

// smooth scrol
$(".list a").click(function () {
  $("body,html").animate({
    scrollTop: $($(this).attr("href")).offset().top,
  });
});
