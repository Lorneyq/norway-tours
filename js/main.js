$(document).ready(function () {

    const swiper = new Swiper('.video__slider-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: "fraction",
          formatFractionCurrent: function(number) {
            if (number < 10) {
            number = '0' + number;
            }
            return number;
            },
          formatFractionTotal: function(number) {
            if (number < 10) {
            number = '0' + number;
            }
            return number;
            },
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints: {
        // when window width is >= 640px
        640: {
          simulateTouch: true,
          keyboard: true,
        },
        // when window width is >= 1300px
        1300: {
          simulateTouch: false,
          keyboard: false,
        },
      }

      });

    const swiper2 = new Swiper('.gallery-slider-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3.5,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        simulateTouch: true,
        keyboard: true,
        mousewell: true,

        breakpoints: {
          // when window width is >= 200px
          200: {
          slidesPerView: 1,
          },
          // when window width is >= 481px
          481: {
          slidesPerView: 2,
          },
          // when window width is >= 769px
          769: {
          slidesPerView: 3,
          },
          // when window width is >= 1801px
          1801: {
          slidesPerView: 3.5,
          },
        }
      });

    const swiper3 = new Swiper('.tour-slide-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1.17, 
        autoplay: {
            delay: 3000,
          },
          keyboard: true,
          breakpoints: {
          // when window width is >= 480px
          480: {
            slidesPerView: 1.2,
          },
          // when window width is >= 1300px
          1300: {
          slidesPerView: 1,
          },
          // when window width is >= 1800px
          1800: {
          slidesPerView: 1.17,
          },
        }
      });

      $(document).ready(function () {
        $(".menu-btn").click(function (event) {
          $(".menu-btn, .menu").toggleClass("active");
        });
      });

















//     let currentSlide;
//     let slidesCount;
//     let sliderCounter = document.createElement('div');
//     sliderCounter.classList.add("slider__counter");

//     let updateSliderCounter = function (slick, currentIndex) { 
//         currentSlide = slick.slickCurrentSlide() + 1;
//         slidesCount = slick.slideCount;
//         $(sliderCounter).text(currentSlide + "/" + slidesCount);
//     };

//     $(".video__slider").on("init", function (event, slick) {
//         $(".video__slider").append(sliderCounter);
//         updateSliderCounter(slick);
//     });

//     $(".video__slider").on("afterChange", function (event, slick, currentSlide) {
//         updateSliderCounter(slick, currentSlide);
// });


// $('.video__slider').slick({
//     arrows: true,
//     dots: false,
//     slidesToShow:1,
//     swipe:false,
// });


// $('.gallery-slider').slick({
//     arrows: true,
//     dots: false,
//     slidesToShow:3,
//     slidesToScroll: 1,

// });

// $('.tour-slider').slick({
//     arrows: false,
//     dots: false,
//     slidesToShow:1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     centerMode: true,
//     centerPadding: '0px',
// });

});