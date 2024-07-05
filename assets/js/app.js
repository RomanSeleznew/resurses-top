document.addEventListener('DOMContentLoaded', function () {

    let spaceBetweenSlide = '';
    if (document.documentElement.clientWidth > 980) { 
        spaceBetweenSlide = 24;
    }
    else {
        spaceBetweenSlide = 16;
     };
    
    const mySwiper__intro = new Swiper('.mySwiper__intro-page', {
        loop: true, // Включение циклического пролистывания
        // autoplay: { // Автопрокрутка
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        on: {
            init: function () {
              console.log("swiper initialized");
            },
          },
        on: {
            slideChangeTransitionStart: function() {
                // Здесь меняем фоновое изображение в шапке сайта
                console.log('Тест');
                let getActivSlide = document.querySelector('.slide-intro.swiper-slide-active');
                if (getActivSlide) {
                    let getDataFon = getActivSlide.querySelector('.swiper__fon-header');
                    let background = getDataFon.dataset.background;
                    console.log(background);
                    let getHeader = document.querySelector('.header');
                    getHeader.setAttribute("style", "background-image: url("+background+")");
                }
            }
        }
    });
    getActivSlide = document.querySelector('.slide-intro.swiper-slide-active');
    if (getActivSlide) {
        let getDataFon = getActivSlide.querySelector('.swiper__fon-header');
        let background = getDataFon.dataset.background;
        let getHeader = document.querySelector('.header');
        getHeader.setAttribute("style", "background-image: url("+background+")");
    }

    const mySwiper__stocks = new Swiper('.mySwiper__stocks', {
        loop: true, 
        spaceBetween: spaceBetweenSlide,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2,
        breakpoints: {
          320: {
              slidesPerView: 1.1,
          },
          768: {
              slidesPerView: 1.1,
          },
          1024: {
              slidesPerView: 2,
          }
          },
    });
    const mySwiper_advantages = new Swiper('.mySwiper_advantages', {
      loop: true, 
      spaceBetween: spaceBetweenSlide,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      slidesPerView: 2,
      breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 3.5,
        },
        1024: {
            slidesPerView: 5,
        }
        },
    });
    const mySwiper_guarantees = new Swiper('.mySwiper_guarantees', {
        loop: true, 
        spaceBetween: spaceBetweenSlide,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2,
        breakpoints: {
          320: {
              slidesPerView: 1.2,
          },
          768: {
              slidesPerView: 3.2,
          },
          1024: {
              slidesPerView: 5,
          }
          },
      });
      const mySwiper_three_slide = new Swiper('.mySwiper_three_slide', {
        loop: true,
        spaceBetween: spaceBetweenSlide,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 2,
        breakpoints: {
          320: {
              slidesPerView: 1.1,
          },
          768: {
              slidesPerView: 2.1,
          },
          1024: {
              slidesPerView: 3,
          }
          },
    });
    var mySwiperPhotoClinic = new Swiper('.mySwiper-photo-clinic', {
        loop: true, 
        spaceBetween: spaceBetweenSlide,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 4,
        breakpoints: {
            320: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 3.2,
            },
            1024: {
                slidesPerView: 4,
            }
            }
    });
    const mySwiper_article = new Swiper('.mySwiper_article', {
        loop: true,
        spaceBetween: spaceBetweenSlide,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 4,
        breakpoints: {
          320: {
              slidesPerView: 1.2,
          },
          768: {
              slidesPerView: 2.2,
          },
          1024: {
              slidesPerView: 4,
          }
          },
    });
    var mySwiperRating = new Swiper('.mySwiper_rating', {
        loop: true, 
        spaceBetween: spaceBetweenSlide,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 4,
        breakpoints: {
            320: {
                slidesPerView: 1.1,
            },
            768: {
                slidesPerView: 3.1,
            },
            1024: {
                slidesPerView: 4,
            }
            }
    });
    let getPlaneSlider = document.querySelector('.plane__slide');
    if (getPlaneSlider) {
        const  slideInicialiazaciya = function() {
            if (document.documentElement.clientWidth < 981) {
                getPlaneSlider.classList.add('mySwiper__plan');
            } else {
                getPlaneSlider.classList.remove('mySwiper__plan');
            }
        }
        slideInicialiazaciya();
        var mySwiperPlane = new Swiper('.mySwiper__plan', {
            loop: true, 
            spaceBetween: 24,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1.1,
        });
    }
    
    const descopMenu = function() {
        let getMenuParent = document.querySelectorAll('.parent-nav.mobile-level-0'); 
        if (getMenuParent) {
            for (let i = 0; i <= getMenuParent.length; i++) {
                if (getMenuParent[i]) {
                    getMenuParent[i].onclick = function() {
                        getMenuParent[i].classList.toggle('show');
                    }
                }
            }
        }
    }
    const actionMenu = function() {
        let openMenu = document.querySelector('.burger__menu'); 
        let closeMenu = document.querySelector('.container__menu-close');
        let getMenu = document.querySelector('.wraper__mobile');
        let getBody = document.querySelector('body')
        if (openMenu) {
            openMenu.onclick = function() {
                getMenu.classList.add('active');
                getBody.classList.add('menu-active-body-fixed');
            }
        }
        if (closeMenu) {
            closeMenu.onclick = function() {
                getMenu.classList.remove('active');
                getBody.classList.remove('menu-active-body-fixed')
            }
        }
    }
    const tabs = function() {
        let getTabItem = document.querySelectorAll('.tabs__wraper');
        let getTabItemActiv = document.querySelector('.tabs__wraper.active');
        console.log(getTabItem);
        for (let i = 0; i <= getTabItem.length; i++) {
            if (getTabItem[i]) {
                getTabItem[i].addEventListener("click", function(e){
                    e.preventDefault();
                    if (getTabItem[i].classList.contains('active')) {
                        getTabItem[i].classList.remove('active');
                    } else {
                        getTabItem[i].classList.add('active');
                    }
                })
            }
        }
    }
    const futterNav = function() {
        let nav = document.querySelectorAll('.column__item.nav');
        for (let i = 0; i <= nav.length; i++) {
            if (nav[i]) {
                nav[i].addEventListener("click", function(e){
                 e.preventDefault();
                 if (nav[i].classList.contains('active')) {
                    nav[i].classList.remove('active');
                } else {
                    nav[i].classList.add('active');
                }
                })
            }
        }
    }

    actionMenu();
    descopMenu();
    tabs();
    futterNav();
})
document.addEventListener('DOMContentLoaded', function () {
    let tabNavs = document.querySelectorAll(".tab");
    let tabPanes = document.querySelectorAll(".tab-panel");

    for (var i = 0; i < tabNavs.length; i++) {

    tabNavs[i].addEventListener("click", function(e){
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute("data-tab");

        for (var j = 0; j < tabNavs.length; j++) {
        let contentAttr = tabPanes[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
            tabNavs[j].classList.add("active");
            tabPanes[j].classList.add("active"); 
        } else {
            tabNavs[j].classList.remove("active");
            tabPanes[j].classList.remove("active");
        }
        };
    });
    }

    let tabNavsPrice = document.querySelectorAll(".nav-tab");
    let tabPanesPrice = document.querySelectorAll(".price-item");

    for (var i = 0; i < tabNavsPrice.length; i++) {

    tabNavsPrice[i].addEventListener("click", function(e){
        e.preventDefault();
        let activeTabAttr = e.target.getAttribute("data-tab");

        for (var j = 0; j < tabNavsPrice.length; j++) {
        let contentAttr = tabPanesPrice[j].getAttribute("data-tab-content");

        if (activeTabAttr === contentAttr) {
            tabNavsPrice[j].classList.add("active");
            tabPanesPrice[j].classList.add("active"); 
        } else {
            tabNavsPrice[j].classList.remove("active");
            tabPanesPrice[j].classList.remove("active");
        }
        };
    });
    }
});