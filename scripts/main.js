// ==================================Menu Bar Toggle Coding=======================================//

let speed = 12000;
let stopingIntervals;
const navButton = document.querySelector('.navButton');
$(document).ready(function () {
    $("#menu-icon").click(function () {
        console.log("hellow orld");
        $(".dropdown").toggleClass("active-dropdown")
        if (stopingIntervals) {
            clearTimeout(stopingIntervals);
            stopingIntervals = null;
        }
        stopingIntervals = setTimeout(function () {
            $(".dropdown").removeClass("active-dropdown")
            const close = document.querySelector('.active-dropdown');
            if (close == null) {
                document.querySelector('.stop-anim') ? navButton.classList.remove('stop-anim') : " ";
                document.getElementById('menu-icon').innerHTML = '<path d="M0 3H20V5H0V3ZM0 9H20V11H0V9ZM0 15H20V17H0V15Z" fill="white"/>'
            } else {
                navButton.classList.add('stop-anim');
                document.getElementById('menu-icon').innerHTML = '<path d="M10 8.586L2.929 1.515L1.515 2.929L8.586 10L1.515 17.071L2.929 18.485L10 11.414L17.071 18.485L18.485 17.071L11.414 10L18.485 2.929L17.071 1.515L10 8.586V8.586Z" fill="white"/>'
            }
        }, speed);
        const close = document.querySelector('.active-dropdown');
        if (close == null) {
            document.querySelector('.stop-anim') ? navButton.classList.remove('stop-anim') : " ";
            document.getElementById('menu-icon').innerHTML = '<path d="M0 3H20V5H0V3ZM0 9H20V11H0V9ZM0 15H20V17H0V15Z" fill="white"/>'
        } else {
            navButton.classList.add('stop-anim');
            document.getElementById('menu-icon').innerHTML = '<path d="M10 8.586L2.929 1.515L1.515 2.929L8.586 10L1.515 17.071L2.929 18.485L10 11.414L17.071 18.485L18.485 17.071L11.414 10L18.485 2.929L17.071 1.515L10 8.586V8.586Z" fill="white"/>'
        }
    });
});

window.addEventListener('scroll', function (e) { 
    e.preventDefault();
    this.scrollY > 175 ? document.querySelector('.navButton').classList.add('act-scrl-bg') : document.querySelector('.navButton').classList.remove('act-scrl-bg')
 })


 //-----------------------------------Carousel Animation On Images As Slides----------------------------------//
function startAnimation() {
    const tl = gsap.timeline({})
    tl
        // .from('.slide1', { opacity: 0, ease: 'power3.inOut' })
        // .from('.slide2', { opacity: 0, ease: 'power3.inOut' })
        // .from('.slide3', { opacity: 0, ease: 'power3.inOut' })
        // .from('.slide4', { opacity: 0, ease: 'power3.inOut' })
        .from('.slide', { duration : 20 , opacity: 0.2, ease: 'power3.inOut', stagger : {
            each : 5,
            repeat: -1,
            ease: "power3.inOut",
        } })
}

window.addEventListener('load', startAnimation());

// ====================================== * Product * ======================================= -->

let productContainer = document.querySelector('.product-container'); // p-left-anim
let proImgview = document.querySelector('.p-left'); // p-left-anim
let options = {
    root: null,
    // rootMargin: '-300px',
    rootMargin: '0px',
    threshold: 0.0,
  }
  let observer = new IntersectionObserver((entries) => {
        let visible = entries[0];
        visible.isIntersecting === true ? proImgview.classList.add('p-left-anim') : proImgview.classList.remove('p-left-anim');
  }, options);
  observer.observe(productContainer);
