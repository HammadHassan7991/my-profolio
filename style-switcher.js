// Toggle class in style-switcher-toggler
$(".style-switcher-toggler").on("click", () => {
  $(".style-switcher").toggleClass("open");
  //   console.log($(".style-switcher").attr("class"));
  //   return classList
});
// hide styel-switcher on scroll down
// window.addEventListener("scroll", () => {
// $(window).scroll(function () {
//   if ($(".style-switcher").hasClass("open")) {
//     $(".style-switcher").toggleClass("open");
//     console.log('scroll works');
//   }
// });
// hide styel-switcher on scroll down
$('.Section').on('scroll', () => {
  if ($(".style-switcher").hasClass("open")) {
    $(".style-switcher").toggleClass("open");
    console.log('scroll works');
  }
  console.log('scrolled....');
})

// theme colors
const setActiveStyle = (color) => {
  $(".alternate-style").each((index, element) => {
    // console.log($(element).attr("title"));

    if (color == $(element).attr("title")) {
      $(element).removeAttr("disabled");
    } else {
      $(element).attr("disabled", "true");
    }
  });
};

// day night mode

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    $(".day-night i").toggleClass("fa-moon");
    $(".day-night i").toggleClass("fa-sun");
  } else {
    $(".day-night i").toggleClass("fa-moon");
  }
});

$(".day-night").on("click", () => {
  $(".day-night i").toggleClass("fa-sun");
  $(".day-night i").toggleClass("fa-moon");
  document.body.classList.toggle("dark");
});
