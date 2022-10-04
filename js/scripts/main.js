// AOS Animate 
AOS.init({
    duration : 1000, // duration of the animation
    once: true       // execute only once
  });

// Button Hamburguer menu
const mobileButton = document.getElementById('js-menu-button');
mobileButton.addEventListener('click', () => {
    mobileButton.classList.toggle('is-active'); // add the CSS config to the button - lib class
    document.documentElement.classList.toggle('menu-opened'); // add to DOM the class menu-opened
})

// Change image on hover
const btnPrimary = document.getElementById('js-btn-primary');
const imgNotion = document.getElementById('img-notion');
btnPrimary.addEventListener('mouseover', changeImgWhite);
btnPrimary.addEventListener('mouseout', changeImgBlack);

function changeImgWhite(){
    imgNotion.setAttribute('src', '/img/icon-notion-white.svg');
}
function changeImgBlack(){
    imgNotion.setAttribute('src', '/img/icon-notion-black.svg');
}

// Change menu background color on scroll
const header = document.getElementById('js-header');
document.addEventListener('scroll', () => {
    // Using Window.pageYOffset to get position of the page on the viewport
    if(window.pageYOffset > 50){
        header.classList.add('bgON');
    }
    else{
        header.classList.remove('bgON');
    }
});