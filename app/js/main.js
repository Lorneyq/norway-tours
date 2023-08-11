$(function () {


  $('.menu__btn').click(function(){
    $(".menu__btn, .menu").toggleClass('open');
  })

  const program = new Swiper(".program__slider", {
    loop: false,
    slidesPerView: 1.13,
    spaceBetween: 10,
    speed: 200,
    simulateTouch: true,
    keyboard: true,
    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      // when window width is >= 480px
      1: {
        slidesPerView: 1,
      },
      // when window width is >= 760px
      760: {
      slidesPerView: 1,
      },
      // when window width is >= 1300px
      1801: {
      slidesPerView: 'auto',
      },
    }
  });

  const preview = new Swiper(".preview__slider", {
    loop: true,
    slidesPerView: 1,
    initialSlide: 0,
    simulateTouch: false,
    keyboard: true,
    speed: 1,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        if (number < 10) {
          number = "0" + number;
        }
        return number;
      },
      formatFractionTotal: function (number) {
        if (number < 10) {
          number = "0" + number;
        }
        return number;
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
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

  preview.on("transitionEnd", function () {
    if (this.realIndex == 0) {
      document.querySelector(".top-bg").style.background = "#EDF2FB";
      document.querySelector(".rules__bg").style.background = "#EDF2FB";
      document.querySelector(".footer__content").style.background = "#EDF2FB";
    }
    if (this.realIndex == 1) {
      document.querySelector(".top-bg").style.background = "#D3E5CE";
      document.querySelector(".rules__bg").style.background = "#D3E5CE";
      document.querySelector(".footer__content").style.background = "#D3E5CE";
    }
    if (this.realIndex == 2) {
      document.querySelector(".top-bg").style.background = "#F8DCDF";
      document.querySelector(".rules__bg").style.background = "#F8DCDF";
      document.querySelector(".footer__content").style.background = "#F8DCDF";
    }
  });



  const gallery = new Swiper(".gallery__slider", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    initialSlide: 0,
    effect: "slider",
    speed: 500,
    simulateTouch: true,
    keyboard: true,
    lockSwipeToPrev: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

      breakpoints: {
      // when window width is >= 640px
      1: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      // when window width is >= 739px
      739: {
        slidesPerView: "auto",
        loop: true,
      },
      // when window width is >= 960px
      960: {
        spaceBetween: 30,
      },
    }
  });

  gallery.slideTo(gallery.slides.length - 4);

});

  // validate
  const phoneNumberInput = document.querySelector('#phone-number-input');
  phoneNumberInput.addEventListener('input', function(event) {
    const currentValue = event.target.value;
    const numericValue = currentValue.replace(/\D/g, '');
    const formattedValue = `+${numericValue}`;
    event.target.value = formattedValue;
  });

  function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
  }
