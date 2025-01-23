$(".a4").click(function (e) {
  e.preventDefault;
});

$(".a5").click(function (e) {
  return false;
});


$("body").click(function () {
  console.log("body 클릭됨");
});

$("section").click(function () {
  console.log("section 클릭됨");
});

$("div").click(function () {
  console.log("div 클릭됨");
});
$("article").click(function (e) {
  console.log("article 클릭됨");

  // 전파 방지
  // e.preventDefault();
  // e.stopPropagation();
  return false;
});
$("nav").click(function () {
  console.log("nav 클릭됨");
});
$("span").click(function () {
  console.log("span 클릭됨");
});
