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

 // ==================================Product Quote Coding=======================================//
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

 let inputFieldContact = document.querySelector('.inputFieldContact')
 let labelMidC = document.querySelector('.form-group-number label');
 let phoneCode = document.querySelector('.form-group-number span');
 inputFieldContact.addEventListener('focus', function(){
    labelMidC.classList.add('labelC');
    phoneCode.classList.add('phoneCode');
    inputFieldContact.addEventListener('blur', function (e) { 
       if (e.target.value.length === 0) {
           labelMidC.classList.remove('labelC');
           phoneCode.classList.remove('phoneCode');
       }
     })
})     