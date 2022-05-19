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

  var image = "images/maps-and-flags.png";
  var beachMarker = new google.maps.Marker({
    position: {
      lat: 40.645037,
      lng: -73.880224,
    },
    map: map,
    icon: image,
  });
}
