/* pc menu */
$(".menu-1 > li").mouseover(function () {
  $(".menu-1 > li").removeClass("on");
  $(this).addClass("on");
});

$(".hd").mouseover(function () {
  const hasOn = $(".menu-1 > li").hasClass("on");

  let menuHeight;
  let borderHeight;
  if (hasOn) {
    menuHeight = $(".menu-1 > .on > ul").height() + 20 + "px"; // padding 20px";
    borderHeight = "1px";
  } else {
    menuHeight = "0px";
    borderHeight = "0px";
  }

  $(".bg").css({
    height: menuHeight,
    "border-bottom": borderHeight + " solid #f4f4f4"
  });
});

$(".hd").mouseleave(function () {
  $(".bg").css({ height: "0", "border-bottom": "none" });
  $(".menu-1 > li").removeClass("on");
});

/* mobile menu */
$(".mobile-menu").click(function () {
  $(".mobile-menu").toggleClass("on");
  $(".menu-1").toggleClass("on");
});
