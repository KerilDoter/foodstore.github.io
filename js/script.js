"use strict"

/* СЛАЙДЕРЫ */

$(document).ready(function(){
    $('.slider-bludes').slick({ // По стандарту читам 'slider'
        arrows:true, //Стрелки
        dots:false, //Точки
        slidesToShow:4, /*Кол-во видимых слайдов*/
        slidesToScroll:2, /*Кол-во пролистываемых слайдов*/
        speed:1000, /*Скорость пролистывания*/
        infinite:false, /*Бесконечный ли слайдер*/
        autoplay:false, /*Меняются слайды*/
        draggable: false,
        autoplaySpeed:3000, /*Скорость смены слайдов*/
         responsive: [
                           
                            {
                              breakpoint: 1024,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                              }
                            },
                             {
                              breakpoint: 425,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                              }
                            },
                             {
                              breakpoint: 375,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                              }
                            }

                          ]
    });

});

/* Определние типа устройства */

const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");

          if (devices.test(navigator.userAgent))
          {
               document.body.classList.add('_touch');

               let menuArrows = document.querySelectorAll('.menu__arrow');
               if (menuArrows.length > 0) {
                    for (let index = 0; index < menuArrows.length; index++){
                      const menuArrow = menuArrows[index]; 
                      menuArrow.addEventListener("click", function(e) {
                        menuArrow.parentElement.classList.toggle('_active');
                      });
                    }
               }
          }
          else
          {
               document.body.classList.add('_pc');
          }

/* Плавная навигация через data-goto="" */

$(function() {
    $('body').on('click', '[data-goto]', function(e) {
        e.preventDefault();
        var selector = $(this).attr('data-goto');
        $('html, body').animate({ scrollTop: $(selector).offset().top - 60}, 1200);
    
        if (iconMenu.classList.contains('_active')){
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        }
    });
});

/* БУРГЕР */

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

/* VIDEO */

$('.video').parent().click(function () {

  if($(this).children(".video").get(0).paused){       
 $(this).children(".video").get(0).play();   
$(this).children(".playpause").fadeOut();

    }else{      
 $(this).children(".video").get(0).pause();

  $(this).children(".playpause").fadeIn();

    }

});

/* Категории товаров */

$('.slide-b1-link').on('click', function (){
  $('.video-section').hide();	
  $('.transfer').hide();	
  $(this).toggleClass('slide-b1-link-active')	
});


