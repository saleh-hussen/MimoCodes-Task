$(function () {
  var header = $(".menu");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});
$(".nav-item").click(function(){
    $("#home-section").addClass("d-none");
    $(".menu").addClass("dark-bg");
    $("body").removeClass("custom-body");
})
$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $(".mobile-menu").toggleClass("display-none");
    $(".menu-background").toggleClass("display-none");
  });
  $(".menu-background").click(function () {
    $(".mobile-menu").toggleClass("display-none");
    $(".menu-background").toggleClass("display-none");
  });
});
!(function (e) {
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
  function v() {
    if (!isMobile) {
      skrollr.init({
        forceHeight: !1,
        smoothScrolling: !1,
      });
    }
  }
  (V = e("html, body")),
    (na = function () {
      e("#particles-js").length &&
        particlesJS("particles-js", {
          particles: {
            number: {
              value: 110,
              density: {
                enable: !0,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ffffff",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.6000850120433731,
              random: !0,
              anim: {
                enable: !1,
                speed: 1,
                opacity_min: 0.1,
                sync: !1,
              },
            },
            size: {
              value: 1,
              random: !0,
            },
            line_linked: {
              enable: !0,
              distance: 220,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: !0,
              speed: 8,
              direction: "none",
              random: !0,
              straight: !1,
              out_mode: "out",
              bounce: !1,
              attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: !0,
                mode: "grab",
              },
              onclick: {
                enable: !0,
                mode: "repulse",
              },
              resize: !0,
            },
            modes: {
              grab: {
                distance: 260,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 180,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: !0,
        });
    });
  if (
    (V.each(function () {
      e(this).scrollspy("refresh");
    }),
    na(),
    r())
  ) {
    var fa;
  }
})(jQuery);
