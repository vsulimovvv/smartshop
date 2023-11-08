window.addEventListener('DOMContentLoaded', () => {
  //   // * ===== Mask input
  //   $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ===== Nice Select
  $('select').niceSelect();

  (function labelAnim() {
    $('.form-default__input').focus(function () {
      $(this).parents('.form-default__group').addClass('focused');
    });

    $('input').blur(function () {
      var inputValue = $(this).val();
      if (inputValue == '') {
        $(this).removeClass('filled');
        $(this).parents('.form-default__group').removeClass('focused');
      } else {
        $(this).addClass('filled');
      }
    });
  })();

  (function labelAnim() {
    $('.form-default__select').focus(function () {
      $(this).parents('.form-default__group').addClass('focused');
    });

    $('input').blur(function () {
      var inputValue = $(this).val();
      if (inputValue == '') {
        $(this).removeClass('filled');
        $(this).parents('.form-default__group').removeClass('focused');
      } else {
        $(this).addClass('filled');
      }
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.categories-slider__slider');
    if (sliderEl) {
      new Swiper(sliderEl, {
        slidesPerView: 'auto',
        spaceBetween: 75,

        breakpoints: {
          315: {
            spaceBetween: 32,
          },

          768: {
            spaceBetween: 80,
          },
        },
      });
    }
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.collections__slider');
    if (sliderEl) {
      new Swiper(sliderEl, {
        slidesPerView: 4,
        spaceBetween: 30,

        breakpoints: {
          315: {
            spaceBetween: 16,
            slidesPerView: 2.3,
          },
          576: {
            slidesPerView: 2.3,
            spaceBetween: 16,
          },
          768: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });
    }
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.brands-row__slider');
    if (sliderEl) {
      new Swiper(sliderEl, {
        slidesPerView: 'auto',
        spaceBetween: 115,
        loop: true,
        speed: 5000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false, // или сделать так, чтобы восстанавливался autoplay после взаимодействия
        },

        breakpoints: {
          315: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            grid: {
              rows: 2,
              fill: 'row',
            },
            slidesPerView: 'auto',
          },
          576: {
            spaceBetween: 30,
            slidesPerView: 'auto',
            grid: {
              rows: 2,
              fill: 'row',
            },
            slidesPerView: 'auto',
          },
          768: {
            spaceBetween: 50,
            grid: {
              rows: 2,
              fill: 'row',
            },
            slidesPerView: 'auto',
          },
          991: {
            slidesPerView: 'auto',
            spaceBetween: 115,
          },
        },
      });
    }
  })();
  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelector('.header__slider');
    if (sliderEl) {
      new Swiper(sliderEl, {
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        speed: 5000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },

        breakpoints: {
          991: {
            slidesPerView: 'auto',
            spaceBetween: 32,
          },
        },
      });
    }
  })();

  // * ==== Single Product
  (function verticalSlider() {
    const sliderNav = document.querySelector('#slider-nav');
    if (sliderNav) {
      let mySwiperNav = new Swiper(sliderNav, {
        slidesPerView: 'auto',
        spaceBetween: 12,
        direction: 'vertical',
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
          nextEl: '#slider-nav .swiper-button-next',
          prevEl: '#slider-nav .swiper-button-prev',
        },
        breakpoints: {
          320: {
            direction: 'horizontal',
          },
          991: {
            direction: 'vertical',
          },
        },
      });

      let mySwiper = new Swiper('#slider-main', {
        spaceBetween: 10,
        loopedSlides: 4,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        thumbs: {
          swiper: mySwiperNav,
        },
        navigation: {
          nextEl: document.querySelector('#slider-main .swiper-button-next'),
          prevEl: document.querySelector('#slider-main .swiper-button-prev'),
        },
      });
    }
  })();

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control-btn', '.accordion-content', '.accordion');

  //   // * ===== Fixed Header
  //   (function fixedHeader() {
  //     function scrollHeader() {
  //       const nav = document.querySelector('header');
  //       if (this.scrollY >= 90) {
  //         nav.classList.add('scroll-header');
  //       } else {
  //         nav.classList.remove('scroll-header');
  //       }
  //     }
  //     window.addEventListener('scroll', scrollHeader);
  //     // ! Change
  //     function changeBg() {
  //       const header = document.querySelector('header');
  //       if (window.pageYOffset >= 90) {
  //         header.classList.add('scroll-header');
  //       }
  //     }
  //     changeBg();
  //   })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Modal
  (function modals() {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelectorAll(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');
      if (modalEl) {
        openBtnEl.forEach((el) => {
          el.addEventListener('click', (e) => {
            if (e.target) {
              e.preventDefault();
            }
            modalEl.classList.add('active');
            body.classList.add('no-scroll');
          });
        });
        closeEl.forEach((btn) => {
          btn.addEventListener('click', (e) => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      }
    }
    bindModal('.location-btn', '.popup--location', '.popup__close');
  })();

  //   // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs(
    '.tabs-orders',
    '.tabs-orders__btn',
    '.tabs-orders__content',
    'active'
  );
});
