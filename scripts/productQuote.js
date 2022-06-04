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
 let phoneCodes = document.querySelector('.form-group-number span');
 inputFieldContact.addEventListener('focus', function(){
    labelMidC.classList.add('labelC');
    phoneCodes.classList.add('phoneCode');
    inputFieldContact.addEventListener('blur', function (e) { 
       if (e.target.value.length === 0) {
           labelMidC.classList.remove('labelC');
           phoneCodes.classList.remove('phoneCode');
       }
     })
}) 


//====================================== * Calling Api For Getting Country Name And Phone Code * ======================================//              
const sCountry = document.getElementById('sCountry');
const phoneCode = document.getElementById('phoneCode');

function getAuthToken(){
    let API_KEY = "SXJRbWxnOXRmYnM5M3I3VUdkU1NmMEl3RFFlTjNVREl5UERFc1Y3Yw=="
    return API_KEY;
}

function getCountries(){
    let API_KEY = getAuthToken();
    let countryURL = "https://api.countrystatecity.in/v1/countries";
    fetch(countryURL, {
        method : 'GET',
        headers:{
            "X-CSCAPI-KEY": `${API_KEY}`,
            "Accept": "application/json",
        }
    }).then(response => response.json()).then(result =>{
      countries = result;
      for (let i = 0; i < countries.length; i++) {
         let optionTag = `<option value="${countries[i].name}">${countries[i].name}</option>` ;
         sCountry.insertAdjacentHTML('beforeend',optionTag); 
     }
    }).catch((error) =>{
        console.log(error);
    });
}

function getPhoneCode(country){
   if(country == undefined){
       alert("Sorry we couldn't find Phone Code For Your Country")
       return
   }
   let API_KEY = getAuthToken();
   let stateURL = `https://api.countrystatecity.in/v1/countries/${country}`;
   fetch(stateURL, {
       method : 'GET',
       headers:{
           "X-CSCAPI-KEY": `${API_KEY}`,
           "Accept": "application/json",
       }
   }).then(response => response.json()).then(result =>{
       let phoneCodeNumber = result.phonecode.replace('+','');
       phoneCode.textContent = `+${phoneCodeNumber}`
   }).catch((error) =>{
       console.log(error);
   });
}  

sCountry.addEventListener('change', function (e) {
    e.preventDefault();
    phoneCode.textContent ? phoneCode.textContent = "" : ""
    let get_country_code = countries.find(country => country.name === sCountry.value);
    getPhoneCode(get_country_code.iso2);
})
getCountries();

// ====================================== * Contact Form Validation Coding * ======================================= -->
const productForm = document.getElementById('productForm');
const pName = document.getElementById('pName');
const pEmail = document.getElementById('pEmail');
const pNumber = document.getElementById('pNumber');
const pPhoneCode = document.getElementById('pPhoneCode');
const pMessage = document.getElementById('pmessage');
const requirements = document.getElementById('requirements');
const getQuote = document.getElementById('getQuote');

pName.addEventListener('input', function(e){
    e.preventDefault();
    const fullNameregex= /^[a-zA-Z\s\.]+$/;
    if (fullNameregex.test(e.target.value) === false) {
        pName.value = pName.value.slice(0,pName.value.length - 1)
      }
});

pNumber.addEventListener('keydown', function(e){
    if(e.key==='.' || e.key === '-' || e.key === '+'){
        e.preventDefault();
        this.addEventListener('input', function(event){
            event.target.value = event.target.value.replace(/[^0-9]*/g,'');
        });
    }
});

pEmail.addEventListener('blur', function(e){
    e.preventDefault();
     const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (emailregex.test(pEmail.value) === false) {
        pEmail.value = "";
             return 
         }
 });   

 productForm.addEventListener('submit', function(e){
    if(sCountry.value === ""  || sCountry.value === null){
        alert('Please Select Your Country')
        return;
    }else{
        getQuote.textContent = "Request Sent...!";
        pPhoneCode.value = phoneCode.textContent;
        setTimeout(() => {
            this.submit();
        }, 1000);
    }
})