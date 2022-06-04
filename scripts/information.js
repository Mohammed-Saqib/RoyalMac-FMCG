let navToggle = false;
let menuList = document.querySelector('.info-nav');
let navButton = document.querySelector('.info-nav-btn');
let navLogo = document.getElementById('info-menu-icon')
navButton.addEventListener('click', function (e) {
    e.preventDefault();
    navToggle = !navToggle;
    if(navToggle){
        menuList.classList.add('active-nav');
        navLogo.innerHTML = '<path d="M10 8.586L2.929 1.515L1.515 2.929L8.586 10L1.515 17.071L2.929 18.485L10 11.414L17.071 18.485L18.485 17.071L11.414 10L18.485 2.929L17.071 1.515L10 8.586V8.586Z" fill="white"/>'
    }else{
        navLogo.innerHTML = '<path d="M0 3H20V5H0V3ZM0 9H20V11H0V9ZM0 15H20V17H0V15Z" fill="white"/>';
        document.querySelector('.active-nav') ? menuList.classList.remove('active-nav') : " ";
    }
})

// ================================== Language Coding=======================================//
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en',includedLanguages: 'en,es,de,fr', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
}

// ==================================Menu Bar Color Change On Scroll Coding=======================================//
window.addEventListener('scroll', function (e) { 
    e.preventDefault();
    this.scrollY > 20 ? document.querySelector('.go-up').classList.add('activeGoUp') : document.querySelector('.go-up').classList.remove('activeGoUp')
 })
         
// ==================================Go UP Coding=======================================//
 document.querySelector('.go-up').addEventListener('click', function (e) {
     e.preventDefault();
     window.scrollTo(0 , 0);
 })

// ==================================Contact Coding=======================================//
  const animDelay = document.querySelectorAll('.p-t-crd-content');
  animDelay.forEach(crd => {
      crd.style.animationDelay = -Math.floor(Math.random() * 20)+'s'
  })

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

 let inputField = document.querySelectorAll('.inputField')
 let labelMid = document.querySelectorAll('.form-group label');
 for (let i = 0; i < inputField.length; i++) {
     inputField[i].addEventListener('focus', function(){
         labelMid[i].classList.add('label');
         inputField[i].addEventListener('blur', function (e) { 
            if (e.target.value.length === 0) {
                labelMid[i].classList.remove('label');
            }
          })
     })     
 }

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
