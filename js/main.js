$(function () {
    $(document).ready(function(){
        $('.js-tab-trigger:first-child').addClass('active');
        $('.js-tab-content:first-child').addClass('active');
    });
    $(document).ready(function(){
        $('.tabs__description>span').addClass('black');
    });

     $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

 /// Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');



        var btn = $('#button');

        $(window).scroll(function() {
          if ($(window).scrollTop() > 300) {
            btn.addClass('show');
          } else {
            btn.removeClass('show');
          }
        });

        btn.on('click', function(e) {
          e.preventDefault();
          $('html, body').animate({scrollTop:0}, '300');
        });


 // Menu opener hamburger
    $('.menu-open, .menu a').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu').toggleClass('menu-opened');
    });


// Options
var options = {
  offset: 1000
}

var header = new Headhesive('.header__nav, options');

/* begin begin Back to Top button  */
(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */
    //E-mail Ajax Send
    $("#footer__btn, #costCall-btn, #header__order, #tab-form1, #tab-form2, #tab-form3, #tab-form4").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $.magnificPopup.close(); /*-close form after */
            $('#footer__btn,#header__order,#tab-form1,#tab-form2,#tab-form3,#tab-form4,#menu-modal').trigger( 'reset' );
                setTimeout(function () {

                // Done Functions
            }, 2000);
        });
        return false;
    });



    $(".header__order").magnificPopup();

    // $('.hamburger').magnificPopup({
    //     type: 'inline'
    // });
    $(".tab1 ").magnificPopup();
    $(".tab2").magnificPopup();
    $(".tab3").magnificPopup();
    $(".tab4").magnificPopup();


});



 // Параллакс от скролла
    $(window).bind('scroll',function(e){
        parallaxScroll();
    });
    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('.boy').css('top',(0-(scrolled*0.75))+'px');
    }

    // Параллакс от движения мыши
    if ($(window).width() > 960) {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.circle',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 0,
                                'multiplier': 0.04,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 0,
                                'multiplier': 0.1,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });

        /*Tabs*/

        $('.js-tab-trigger').on('click', function() {
            var tabName = $(this).data('tab'),
                tab = $('.js-tab-content[data-tab="' + tabName + '"]');

            $('.js-tab-trigger.active').removeClass('active');
            $(this).addClass('active');

            $('.js-tab-content.active').removeClass('active');
            tab.addClass('active');

        });

        //Slider partner
        $('.slider-partner').slick({
            dots: false,
            arrow: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 5,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: false,
                        arrow: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: false,
                        arrow: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: false,
                        arrow: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });


    }




