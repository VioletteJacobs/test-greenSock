TweenMax.to('.gauche', 2, {
    delay: 1.5,
    top: "-150%",
    ease: Expo.easeInOut
})

TweenMax.to(".gauche h2", 2,{
    delay: 1,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
    

})

TweenMax.to('.droite', 2, {
    delay: 2.5,
    top: "+150%",
    ease: Expo.easeInOut
})
TweenMax.to(".droite h2", 2,{
    delay: 2,
    opacity: 0,
    y: +100,
    ease: Expo.easeInOut
    

})
// animaiton nav
TweenMax.from(".nav", 2, {
    delay: 3,
    opacity: 0,
    y:-60,
    ease: Expo.easeInOut
})
// animation social
TweenMax.from(".social", 2, {
    delay: 3,
    opacity: 0,
    y:360,
    ease: Expo.easeInOut
})
// animation h1
TweenMax.from("h1", 2, {
    delay: 3,
    opacity: 0,
    x:360,
    ease: Expo.easeInOut
})