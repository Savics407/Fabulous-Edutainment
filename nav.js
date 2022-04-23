/*========== STICKY =============== */
const header = document.querySelector('.top_nav');
// const contest = document.querySelector(".contact-text");
// const abtest = document.querySelector('.abt-content');

const nav = document.getElementById('bar');
const mobile = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.mobile-menu-overlay');
const close = document.querySelector('.close')


// window.onscroll = function() {
//     sticky()
// }

// const sticky = () => {
    
// }

let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   if(scrollTop > lastScrollTop) {
        header.style.top = "-100px";
        header.classList.add('sticky');
    }
    else {
        header.style.top ="0"
    }

    lastScrollTop = scrollTop
})


nav.addEventListener('click', () => {
    // alert("I was clicked");
    // console.log('menu-icon');
    mobile.classList.toggle('transform')
    overlay.classList.toggle('visible')
})

overlay.addEventListener('click', () => {
    // alert("I was clicked");
    mobile.classList.remove('transform')
    overlay.classList.toggle('visible')
})

close.addEventListener('click', () => {
    // alert("I was clicked");
    overlay.style.visibility = "hidden";
    overlay.classList.toggle('visible');
    mobile.classList.remove('transform')
})
