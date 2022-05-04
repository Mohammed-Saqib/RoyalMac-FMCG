// ==================================Menu Bar Toggle Coding=======================================//

let speed = 12000;
let stopingIntervals;
$(document).ready(function () {
    $(".navButton").click(function () {
        $(".dropdown").toggleClass("active-dropdown")
        if (stopingIntervals) {
            clearTimeout(stopingIntervals);
            stopingIntervals = null;
        }
        stopingIntervals = setTimeout(function () {
            $(".dropdown").removeClass("active-dropdown")
            const close = document.querySelector('.active-dropdown');
            if (close == null) {
                document.querySelector('.navButton img').setAttribute('src', './images/svg/menu.svg')
            } else {
                document.querySelector('.navButton img').setAttribute('src', './images/svg/close.svg')
            }
        }, speed);
        const close = document.querySelector('.active-dropdown');
        if (close == null) {
            document.querySelector('.navButton img').setAttribute('src', './images/SVG/menu.svg');
        } else {
            document.querySelector('.navButton img').setAttribute('src', './images/SVG/close.svg')
        }
    });
});

// ====================================== * Product * ======================================= -->

let productContainer = document.querySelector('.product-container'); // p-left-anim
let proImgview = document.querySelector('.p-left'); // p-left-anim
let options = {
    root: null,
    rootMargin: '-300px',
    threshold: 0,
  }
  let observer = new IntersectionObserver((entries) => {
        let visible = entries[0];
        visible.isIntersecting === true ? proImgview.classList.add('p-left-anim') : proImgview.classList.remove('p-left-anim');
  }, options);
  observer.observe(productContainer);