window.addEventListener('scroll', function () {
  const header = document.getElementById('myHeader');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('#topbar').slideUp(); // hides the topbar
  } else {
    $('#topbar').slideDown(); // shows the topbar again when scrolling to top
  }
});


// window.addEventListener('scroll', function () {
//     const header = document.getElementById('myHeader');
//     const topbar = document.getElementById('topbar');

//     if (window.scrollY > 50) {
//       header.classList.add('scrolled');

//       if (topbar && topbar.style.display !== 'none') {
//         topbar.style.display = 'none'; // hide topbar
//       }

//     } else {
//       header.classList.remove('scrolled');

//       if (topbar && topbar.style.display !== 'block') {
//         topbar.style.display = 'block'; // show topbar
//       }
//     }
//   });


$('.slider-one').slick({
  vertical: true,
  slidesToShow: 4,
  centerMode: true,
  centerPadding: '0px',
  infinite: true,
  // initialSlide: Math.floor($('.vertical-slider .slide').length / 3), // Start from center
  initialSlide: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  focusOnSelect: true,
  pauseOnHover: true
});

// Upward reverse slider
$('.slider-two').slick({
  vertical: true,
  slidesToShow: 4,
  centerMode: true,
  centerPadding: '0px',
  infinite: true,
  // initialSlide: Math.floor($('.vertical-slider .slide').length / 2), // Start from center
  initialSlide: 2,
  arrows: false,
  autoplay: false, // custom autoplay below
  autoplaySpeed: 2000,
  focusOnSelect: true,
  pauseOnHover: true
});


// Custom reverse autoplay (slider-two goes upward)
setInterval(() => {
  $('.slider-two').slick('slickPrev');
}, 2000);


$(document).ready(function () {
  $('.hori-slider-one').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    variableWidth: false,
    centerMode: true,
    centerPadding: '100px',
    pauseOnHover: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 520, settings: { slidesToShow: 3 } }
    ]
  });

  $('.hori-slider-two').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    variableWidth: false,
    centerMode: true,
    centerPadding: '100px',
    pauseOnHover: false,
    rtl: true, // bottom slider moves in opposite direction
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 520, settings: { slidesToShow: 3 } }
    ]
  });
});

AOS.init({
  duration: 1200,
})


// company slider
// logo slider

$(document).ready(function () {

  $(".menu").click(function () {
      $(".main_nav").toggleClass("active");
      $("body").toggleClass("active");
  });

  $('.slider').slick({

      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 2000,
      arrows: false,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: false,
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });

});

// service slider
$(document).ready(function () {

  $(".menu").click(function () {
      $(".main_nav").toggleClass("active");
      $("body").toggleClass("active");
  });

  $('.slider-service').slick({

      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 0,
      speed: 3000,
      arrows: false,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: false,
              }
          },
          // {
          //     breakpoint: 480,
          //     settings: {
          //         slidesToShow: 1,
          //         slidesToScroll: 1
          //     }
          // }
      ]
  });

});