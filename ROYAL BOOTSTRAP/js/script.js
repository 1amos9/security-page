$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".nav_search-btn").click(function () {
  if ($(".nav_search-input").hasClass("d-none")) {
    event.preventDefault();
    $(".nav_search-input")
      .animate(
        {
          left: "-1000px",
        },
        "1000000"
      )
      .removeClass("d-none");
  } else {
    $(".nav_search-input")
      .animate(
        {
          left: "0px",
        },
        "1000000"
      )
      .addClass("d-none");
  }
});

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: {
      lat: 40.645037,
      lng: -73.880224,
    },
  });

  var marker = new google.maps.Marker({
    position: {
      lat: 40.645037,
      lng: -73.880224,
    },
    map: map,
  });
}
document.querySelector(".nav_search-btn").style.height = "35px";
document.querySelector(".nav_search-btn").style.width = "35px";
document.querySelector(".logo_box").style.width = "80px";
document.querySelector(".logo_box img").style.width = "80%";
document.querySelector(".carousel-indicators li").style.width = "5px";
document.querySelector(".carousel-indicators li").style.height = "30px";
document.querySelector(".slider-detail").style.width = "60%";
document.querySelector(".welcome_detail").style.width = "75%";
document.querySelector(".welcome_detail-btn a img").style.width = "25px";
document.querySelector(".security_container").style.width = "95%";
document.querySelector(".security_btn a img").style.width = "25px";
document.querySelector(".story_detail").style.width = "85%";
