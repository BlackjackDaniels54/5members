const innerScreenWidth = window.innerWidth;
if(innerScreenWidth > 767) {
    const tl = gsap.timeline({default: {duration: 1 } } );
    gsap.from('.header__logo', {opacity: 0, duration: .7, x: -50 } );
    tl.from('.li__home', {opacity:0, x: 30, duration: .2} )
      .from('.li__project', {opacity:0, x: 30, duration: .2})
      .from('.li__service', {opacity:0, x: 30, duration: .2})
      .from('.li__contact', {opacity:0, x: 30, duration: .2})
      .from('.header__toggle-language-list', {opacity:0, x: 30, duration: .2} )
    
    const orangediamondAnimation = gsap.timeline( { defaults: {duration: 3}, repeat: -1 } );
    orangediamondAnimation.to('.orange-diamond', {y: 15})
                    .to('.orange-diamond', {y: 0})
    const bluediamondAnimation = gsap.timeline( { defaults: {duration: 3}, repeat: -1 } );
    bluediamondAnimation.to('.blue-diamond', {y: -15})
                        .to('.blue-diamond', {y: 0})

}



let rotateAnimation = () => {
const btnOutlineAnimation = gsap.timeline( { defaults: { duration: .1}, repeat: -1, repeatDelay: 3 } );
btnOutlineAnimation.to( '._gsap-animation', {rotate: 5})
    .to( '._gsap-animation', {rotate: -5})
    .to( '._gsap-animation', {rotate: 5})
    .to( '._gsap-animation', {rotate: 0});
    return btnOutlineAnimation;
}
var ra = rotateAnimation();
const topButton = document.querySelector('._gsap-animation');

topButton.addEventListener('mouseover', () => {
    ra.pause();
})
topButton.addEventListener('mouseleave', () => {
    ra.play();
})


let jumpAnimation = () => {
    const btnJumpAnimation = gsap.timeline( { defaults: { duration: .3}, repeat: -1, repeatDelay: 3 } );
    btnJumpAnimation.to( '._gsap-animation-jump', {y: -20} )
                    .to('._gsap-animation-jump', {y: 0, ease: "bounce.out"})
        return btnJumpAnimation;
}
var ja = jumpAnimation();
const formButton = document.querySelector('._gsap-animation-jump');
    
formButton.addEventListener('mouseover', () => {
    ja.pause();
})
    formButton.addEventListener('mouseleave', () => {
    ja.play();
})






