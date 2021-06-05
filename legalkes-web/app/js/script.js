const hamburger = document.querySelector('#hamburger-menu')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');
const footer = document.querySelector('footer');
const bagianSatu = document.querySelector('.bagianSatu');
const bariskosongan = document.querySelector('.bariskosongan');

hamburger.addEventListener('click', function(){
    console.log('bukaa');

    if(header.classList.contains('open')){
        body.classList.remove('freezeScroll');
        header.classList.remove('open');
        fadeElements.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
    else{
        body.classList.add('freezeScroll');
        header.classList.add('open');
        fadeElements.forEach(function(element){
           element.classList.remove('fade-out');
           element.classList.add('fade-in');
        });
    }
})

var monitorHeight = window.screen.availHeight;
var documentHeight = document.body.scrollHeight;

if (monitorHeight > documentHeight) {
    footer.classList.add('absolut');
}

var e = document.getElementById('hero-besar');

if(e){
    const OptionsbagianSatu = {
        rootMargin: '-600px 0px 0px 0px'
    };
    
    const ObserverbagianSatu = new IntersectionObserver(function(entries, ObserverbagianSatu) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                header.classList.add('nav-scrolled');
            }
            else {
                header.classList.remove('nav-scrolled');
            }
        });
    }, 
    OptionsbagianSatu);
    
    ObserverbagianSatu.observe(bagianSatu);
} else {
    const Optionsbariskosongan = {
        rootMargin: '-190px 0px 0px 0px'
    };
    
    const Observerbariskosongan = new IntersectionObserver(function(entries, Observerbariskosongan) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                header.classList.add('nav-scrolled');
            }
            else {
                header.classList.remove('nav-scrolled');
            }
        });
    }, 
    Optionsbariskosongan);
    
    Observerbariskosongan.observe(bariskosongan);
}