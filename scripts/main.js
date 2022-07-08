// ==================================Menu Bar Toggle Coding=======================================//
let speed = 12000;
let stopingIntervals;
const navButton = document.querySelector('.navButton');
$(document).ready(function () {
    $("#menu-icon").click(function () {
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
            } else {
                navButton.classList.add('stop-anim');
            }
        }, speed);
        const close = document.querySelector('.active-dropdown');
        if (close == null) {
            document.querySelector('.stop-anim') ? navButton.classList.remove('stop-anim') : " ";
        } else {
            navButton.classList.add('stop-anim');
        }
    });
});

// ==================================Menu Bar Color Change On Scroll Coding=======================================//
window.addEventListener('scroll', function (e) { 
    e.preventDefault();
    this.scrollY > 20 ? document.querySelector('.go-up').classList.add('activeGoUp') : document.querySelector('.go-up').classList.remove('activeGoUp')
 })

 //================================== language coding ==================================//
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,es,de,fr', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element');
}
$(window).on('load', function () {
    googleTranslateElementInit();
    $('.goog-te-gadget').html($('.goog-te-gadget').children());

    function cleartimer() {
        setTimeout(function () {
            window.clearInterval(myVar);
        }, 500);
    }
    function myTimer() {
        if ($('.goog-te-combo option:first').length) {
            $('.goog-te-combo option:first').html('Language');
            cleartimer();
        }
    }
    var myVar = setInterval(function () { myTimer() }, 0);
});

// ==================================Logo Hide  Coding=======================================//
const logo = document.querySelector('.right-carousel');
const shipAnim = document.querySelector('.box-move');
setTimeout(() => {
    logo.classList.add('hide-logo');
}, 1000);
shipAnim.addEventListener("animationend", function() {
    shipAnim.classList.add('shipAnim');
});

// ==================================Go UP Coding=======================================//
 document.querySelector('.go-up').addEventListener('click', function (e) {
     e.preventDefault();
     window.scrollTo(0 , 0);
 })

// ====================================== * Our Client * ======================================= -->
var swiper = new Swiper(".client-slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
    spaceBetween: 30,
    loop : true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
// ====================================== * Testimonials * ======================================= -->
var swiper = new Swiper(".testimonials-container", {
    effect: "coverflow",
    spaceBetween: 30,
    autoplay: {
    delay: 7000,
    disableOnInteraction: false,
   },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 5,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop : true,
});


// ====================================== * Start of Tawk.to Script * ======================================= -->
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/62959e3e7b967b1179920fcc/1g4c7494a';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


 // ==================================Contact Coding=======================================//
 let inputFields = document.querySelectorAll('.inputFields')
 let labelField = document.querySelectorAll('.form-group label');
 for (let i = 0; i < inputFields.length; i++) {
     inputFields[i].addEventListener('focus', function(){
         labelField[i].classList.add('labelField');
         inputFields[i].addEventListener('blur', function (e) { 
            if (e.target.value.length === 0) {
                labelField[i].classList.remove('labelField');
            }
          })
     })     
 }


// ====================================== * Contact Form Coding * ======================================= -->
const form = document.getElementById('form');
const salesName = document.getElementById('name');
const salesEmail = document.getElementById('email');
const salesSubject = document.getElementById('subject');
const salesMessage = document.getElementById('message');
const salesSubmit = document.getElementById('submit');

salesName.addEventListener('input', function(e){
    e.preventDefault();
    const fullNameregex= /^[a-zA-Z\s\.]+$/;
    if (fullNameregex.test(e.target.value) === false) {
        salesName.value = salesName.value.slice(0,salesName.value.length - 1)
      }
});

salesEmail.addEventListener('blur', function(e){
    e.preventDefault();
     const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (emailregex.test(salesEmail.value) === false) {
             salesEmail.value = "";
             return 
         }
 });   

 form.addEventListener('submit', function(e){
    salesSubmit.textContent = "Message Sent...!";
    setTimeout(() => {
        this.submit();
    }, 1000);
})

