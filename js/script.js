$(document).ready(function () {
  $(".home-form-container .btn-outline").click(function () {
    Swal.fire({
      title: "Thank You!",
      text: "Welcome to our community. Expect exclusive content soon!",
      icon: "success",
      timer: 20000, // 20 seconds
      timerProgressBar: true,
      willClose: () => {},
    });
    $("#email").val("");
  });
});

function includeHTML() {
  var e, t, n, u, i;
  for (e = document.getElementsByTagName("*"), t = 0; t < e.length; t++)
    (u = (n = e[t]).getAttribute("include-html")) &&
      ((i = new XMLHttpRequest()).open("GET", u, !1),
      i.send(),
      200 == i.status
        ? (n.innerHTML = i.responseText)
        : 404 == i.status && (n.innerHTML = "Page not found."),
      n.removeAttribute("include-html"));
}
includeHTML();

if (typeof Swiper !== "undefined") {
  // Slider
  const swiper = new Swiper(".swiper", {
    speed: 400,
    slidesPerView: 3, // Display three cards at once
    spaceBetween: 10, // to adjust the space between slides
    slidesPerGroup: 1, // Move one card at a time
    loop: false,
    loopFillGroupWithBlank: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlidesBounds: true,
    slidesOffsetAfter: 0,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

