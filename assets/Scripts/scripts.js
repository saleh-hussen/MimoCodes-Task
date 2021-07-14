$("#scroll-down").click(function () {
  $("#home-section").addClass("d-none");
  $(".menu").addClass("dark-bg");
  $("body").removeClass("custom-body");
});
function r() {
  var a = e("#particles");
  a.length &&
    a.particleground({
      minSpeedX: 0.6,
      minSpeedY: 0.6,
      dotColor: "#ffffff",
      lineColor: "#ffffff",
      density: 6e3,
      particleRadius: 2,
      parallaxMultiplier: 5.2,
      proximity: 0,
    });
}
var owl = $(".owl-carousel");
owl.owlCarousel({
  margin: 50,
  rtl: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 3000,
  loop: true,
  rewind: true,
  animateIn: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 4,
    },
  },
});

