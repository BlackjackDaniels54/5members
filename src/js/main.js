
"use strict"

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Android());
        
    }
};

if(isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelector('.fa-chevron-right');
    let subList = document.querySelector('.menu__sub-list');
    menuArrows.addEventListener('click', function() {
        subList.classList.toggle('_active');
    })
} else {
    document.body.classList.add('_pc');
}



const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    const toggleLang = document.querySelector('.header__toggle-language-list');

    iconMenu.addEventListener('click', function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        toggleLang.classList.toggle('_active');
    })
}



/*----------------------------------------------*/
const hoverlinkDesign = document.querySelector('.flex__block-borderlink');
const hoverlinkConsult = document.querySelector('.whoweare__button-borderlink');

const currentlinkDesign = document.querySelector('.flex__block-link');
const currentlinkConsult = document.querySelector('.whoweare__button-link');

hoverlinkDesign.addEventListener('mouseover', function(e){
    currentlinkDesign.classList.add('_hover');  
})
hoverlinkDesign.addEventListener('mouseleave', function(e){
    currentlinkDesign.classList.remove('_hover');
})
hoverlinkConsult.addEventListener('mouseover', function(e){ 
    currentlinkConsult.classList.add('_hover');
})
hoverlinkConsult.addEventListener('mouseleave', function(e){
    currentlinkConsult.classList.remove('_hover');  
})
/*----------------------------------------------*/
/* Carousel 
/*----------------------------------------------*/

$(function(){
    $('.carousel__inner').slick({
        slidesToShow:4,
        speed: 700,
        centerMode: true,
        autoplay: true,
        pauseOnHover:true,
        
        touchThreshold:30,
        waitForAnimate:false, 
        
        responsive:[
            {
                breakpoint: 1300,
                settings:{
                    slidesToShow:3
                }  
            },
            {
                breakpoint: 870,
                settings:{
                    slidesToShow:2
                }  
            },
            {
                breakpoint: 650,
                settings:{
                    centerMode: false,
                    slidesToShow: 2
                }  
            },
            {
                breakpoint: 340,
                settings:{
                    slidesToShow:1
                }  
            }
        ]
    });
})