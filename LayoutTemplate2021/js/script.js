document.addEventListener('DOMContentLoaded', e => {
  document.querySelector('.wrapper').classList.add('loaded');
  //MENU BURGER
  document.querySelector('.icon-menu').addEventListener('click', e => {
    e.target.closest('.icon-menu').classList.toggle('active');
    document.querySelector('.header__body').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  });
  //INTERACTIVE BACKGROUND
  function ibg() {
    document.querySelectorAll('.ibg').forEach(ibg => {
      if (ibg.querySelector('img')) {
        ibg.style.backgroundImage = `url(${ibg.querySelector('img').getAttribute('src')})`;
      }
    });
  }
  // ibg();
  scrollAnimation();
  sliderWithIsotope();
  initSliders();
  window.addEventListener('load', function () {
    swiperMode();
  });
  window.addEventListener('resize', function () {
    swiperMode();
  });
  modalActions();
  initCursor();
  linkTo();
  $("#phone").inputmask({ "mask": "(999) 999-9999" });
})

function scrollAnimation() {
  const scrollElements = document.querySelectorAll(".js-scroll");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
}

function sliderWithIsotope() {
  let bestSlider = new Swiper('.best .best__row', {
    // Optional parameters
    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.best .arrR',
      prevEl: '.best  .arrL',
    },
    spaceBetween: 30,

    autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 1,

      },
      769: {
        slidesPerView: 2,

      },
      1201: {
        slidesPerView: 4,
        // loop: true,
      },
    }
  });
  let parent = '.best';
  $(".best__filter button").on("click", function () {
    let filter = $(this).data('filter-name').toLowerCase();
    $(".best__filter button")
    $(".best__filter button").removeClass("active");
    $(this).addClass("active");

    if (filter == "all") {
      $(`${parent} [data-filter]`).removeClass("non-swiper-slide").addClass(`${parent} swiper-slide`).show();

      bestSlider.destroy();
      bestSlider = new Swiper('.best .best__row', {
        direction: 'horizontal',
        navigation: {
          nextEl: '.best .arrR',
          prevEl: '.best  .arrL',
        },
        spaceBetween: 30,
        autoHeight: true,
        breakpoints: {
          320: {
            slidesPerView: 1,

          },
          769: {
            slidesPerView: 2,

          },
          1201: {
            slidesPerView: 4,
          },
        }
      });
    }
    else {
      $(`${parent} .swiper-slide`).not("[data-filter='" + filter + "']").addClass("non-swiper-slide").removeClass(`swiper-slide`).hide(10);
      $("[data-filter='" + filter + "']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
      bestSlider.destroy();
      bestSlider = new Swiper('.best .best__row', {
        direction: 'horizontal',
        slidesPerView: 4,
        navigation: {
          nextEl: '.best .arrR',
          prevEl: '.best  .arrL',
        },
        spaceBetween: 30,

        autoHeight: true,
        breakpoints: {
          320: {
            slidesPerView: 1,

          },
          769: {
            slidesPerView: 2,

          },
          1201: {
            slidesPerView: 4,
          },
        }
      });
    }
  })
}

function initSliders() {
  swiperMerch = new Swiper('.merch .merch__slider', {
    // Optional parameters
    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.merch .arrR',
      prevEl: '.merch  .arrL',
    },
    spaceBetween: 28,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });
  swiperTraining = new Swiper('.tutors .tutors__slider', {
    // Optional parameters
    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.tutors .arrR',
      prevEl: '.tutors .arrL',
    },

    breakpoints: {

      1200: {
        slidesPerView: 3,
        spaceBetween: 182,

      },
    }
  });

  const specOfferSlider = new Swiper('.spec-offer__row', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 2,
    slidesPerGroup: 2,
    // Navigation arrows
    navigation: {
      nextEl: '.spec-offer  .arrR',
      prevEl: '.spec-offer  .arrL',
    },
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 30
      },
    }
  });

  const eventsSlider = new Swiper('.events .events__carusel', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 4,
    loop: true,
    spaceBetween: 28,


    // Navigation arrows
    navigation: {
      nextEl: '.events .arrR',
      prevEl: '.events  .arrL',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,

      },
      769: {
        slidesPerView: 2,
      },
      1201: {
        slidesPerView: 4,
      },
    }
  });

  document.querySelectorAll('.vr-go__sliders .slider').forEach((slider, key) => {
    key = key + 1;
    let parent = `.vr-go__sliders .slider:nth-last-child(${key})`;
    new Swiper(`${parent + ' .slider__carusel'}`, {
      // Optional parameters
      direction: 'horizontal',

      // Navigation arrows
      navigation: {
        nextEl: `${parent} .arrR`,
        prevEl: `${parent} .arrL`,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        }
      }
    });
  });
}

let swiper = '';
let swiperSubscribe = '';
let swiperHeadsets = '';
let swiperRules = '';

let init = false;

function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
  let desktop = window.matchMedia('(min-width: 1025px)');

  // Enable (for mobile)
  if (mobile.matches) {
    if (!init) {
      init = true;

      function tooltip() {
        const dotsData = [
          'Супер реалистичный и качественный пространственный 3D звук',
          'Высочайша скорость обработки информации интерфейсом',
          'Самые удобные контроллеры из существующих',
          'Свобода движений: игрок с легкостью может перемещаться на площадке 8 м2.',
          'Реалистичная графика и максимальный угол обзора',
        ]
        document.querySelectorAll('.power-vr-man-items .dot').forEach((el, key) => {
          tippy(`.power-vr-man-items .item:nth-child(${key + 1}) .dot`, {
            content: dotsData[key],
            arrow: false,
          });
        })
      }
      tooltip();

      document.querySelectorAll('.merch__slider, .subscribe__gallery, .rules__slider, .headsets__slider').forEach(el => el.classList.add('swiper'));
      document.querySelectorAll('.merch__row, .subscribe__gallery .row, .rules__row, .headsets__row').forEach(el => el.classList.add('swiper-wrapper'));
      document.querySelectorAll('.merch .merch__item, .subscribe__gallery .row .item, .rules__row .item, .headsets__item').forEach(el => el.classList.add('swiper-slide'));

      swiper = new Swiper('.merch .merch__slider', {
        // Optional parameters
        direction: 'horizontal',
        // Navigation arrows
        navigation: {
          nextEl: '.merch .arrR',
          prevEl: '.merch  .arrL',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
        }
      });
      swiperHeadsets = new Swiper('.headsets .headsets__slider', {
        // Optional parameters
        direction: 'horizontal',

        // Navigation arrows
        navigation: {
          nextEl: '.headsets .arrR',
          prevEl: '.headsets .arrL',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40
          },
        }
      });
      swiperRules = new Swiper('.rules .rules__slider', {
        // Optional parameters
        direction: 'horizontal',

        // Navigation arrows
        navigation: {
          nextEl: '.rules .arrR',
          prevEl: '.rules .arrL',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 40
          },
        }
      });
      swiperSubscribe = new Swiper('.subscribe .subscribe__gallery', {
        // Optional parameters
        direction: 'horizontal',

        // Navigation arrows
        navigation: {
          nextEl: '.subscribe .arrR',
          prevEl: '.subscribe .arrL',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
        }
      });
    }
  }

  // Disable (for tablet)
  else if (tablet.matches || desktop.matches) {
    if (swiper) {
      swiper.destroy();
      swiperSubscribe.destroy();
      swiperHeadsets.destroy();
      swiperRules.destroy();

      document.querySelectorAll('.merch__slider, .subscribe__gallery, .rules__slider, .headsets__slider').forEach(el => el.classList.remove('swiper'));
      document.querySelectorAll('.merch__row, .subscribe__gallery .row, .rules__row, .headsets__row').forEach(el => el.classList.remove('swiper-wrapper'));
      document.querySelectorAll('.merch .merch__item, .subscribe__gallery .row .item, .rules__row .item, .headsets__item').forEach(el => el.classList.remove('swiper-slide'));
      init = false;
    }
  }
}

function initCursor() {
  $("body").prepend('<div class="cursor-dot-outline"></div>');
  $("body").prepend('<div class="cursor-dot"></div>');

  var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),

    init: function () {
      this.dotSize = this.$dot.offsetWidth;
      this.outlineSize = this.$outline.offsetWidth;

      this.setupEventListeners();
      this.animateDotOutline();
    },

    setupEventListeners: function () {
      var self = this;

      document.querySelectorAll('a').forEach(function (el) {
        el.addEventListener('mouseover', function () {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        el.addEventListener('mouseout', function () {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });
      });

      document.addEventListener('mousedown', function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      document.addEventListener('mouseup', function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });


      document.addEventListener('mousemove', function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();

        self.endX = e.clientX;
        self.endY = e.clientY;
        self.$dot.style.top = self.endY + 'px';
        self.$dot.style.left = self.endX + 'px';
      });

      document.addEventListener('mouseenter', function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      });

      document.addEventListener('mouseleave', function (e) {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      });
    },

    animateDotOutline: function () {
      var self = this;

      self._x += (self.endX - self._x) / self.delay;
      self._y += (self.endY - self._y) / self.delay;
      self.$outline.style.top = self._y + 'px';
      self.$outline.style.left = self._x + 'px';

      requestAnimationFrame(this.animateDotOutline.bind(self));
    },

    toggleCursorSize: function () {
      var self = this;

      if (self.cursorEnlarged) {
        self.$dot.style.transform = 'translate(-50%, -50%) scale(4)';
        self.$outline.style.transform = 'translate(-50%, -50%) scale(0)';
      } else {
        self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
        self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    },

    toggleCursorVisibility: function () {
      var self = this;

      if (self.cursorVisible) {
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      } else {
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      }
    }
  }
  cursor.init();
}

function linkTo() {
  document.querySelectorAll('[data-href]').forEach(link => link.addEventListener('click', e => {
    window.location.href = `${e.currentTarget.getAttribute('data-href')}`;
  }));
}

function modalActions() {
  document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', e => {
      document.querySelector('.modal').classList.add('active');
    });
  })

  document.querySelector('[data-close]').addEventListener('click', e => {
    document.querySelector('.modal').classList.remove('active');
  });
}

