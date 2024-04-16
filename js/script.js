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

// Feature Detailed Page
// Graph

var trendData = {
  labels: ["2000", "2005", "2010", "2015", "2020", "2025"],
  datasets: [
    {
      label: "Trend",
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 3,
      data: [100, 343, 980, 1200, 1300, 1900, 1400],
    },
  ],
};

var ctx = document.getElementById("feat-trendChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: trendData,
  options: {
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function (value, index, values) {
            if (value === 100) {
              return "Low";
            } else if (value === 1200) {
              return "Medium";
            } else if (value === 2000) {
              return "High";
            } else {
              return "";
            }
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Fashion Trend by Years",
        color: "black",
        font: {
          weight: "bold",
        },
      },
      legend: {
        display: false,
      },
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "vertical",
            scaleID: "x",
            value: "2020",
            borderColor: "black",
            borderWidth: 2,
            label: {
              content: "2020",
              enabled: true,
              position: "top",
            },
          },
        ],
      },
    },
  },
});
