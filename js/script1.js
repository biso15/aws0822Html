// 1. addClass(), removeClass() 사용
// let isGrey = false;
// $(".btn-1").click(function () {
//   if (isGrey) {
//     $("div").removeClass("active"); // class 로 css 제어
//   } else {
//     $("div").addClass("active");
//   }
//   isGrey = !isGrey;
// });

// 2. hasClass() 사용
// $(".btn-1").click(function () {
//   let has = $("div").hasClass("active");
//   if (has) {
//     $("div").removeClass("active");
//   } else {
//     $("div").addClass("active");
//   }
// });

// 3. toggleClass() 사용
$(".btn-1").click(function () {
    $("div").toggleClass("active");
});