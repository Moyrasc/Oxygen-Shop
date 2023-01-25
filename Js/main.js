//header-navbar
const headerButtonBurguer = document.querySelector('.header_btn')
const headerButtonClose = document.querySelector('.header_btn_close')
const headerIcons = document.querySelectorAll('.header_icon')
const navLinks = document.querySelector('.nav_links')

headerIcons.forEach(item => {
    item.addEventListener("click", (e) => {
        navLinks.classList.toggle("nav_links_hidden");
        headerButtonBurguer.classList.toggle("hidden");
        headerButtonClose.classList.toggle("hidden");

    })
})
//percentage scroller
const percentageScroller = document.querySelector('.percentage-scroller')
window.addEventListener("scroll", () => {
    let scrollPercentage = Math.round(((window.scrollY) / (document.body.offsetHeight - window.innerHeight)) * 100);

    percentageScroller.style.width = scrollPercentage + "%";
})
// Return to the top
const buttonTop = document.querySelector('#btn-top');
window.onscroll = () => scrollFunction()
const scrollFunction = () => {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        buttonTop.style.display = "block"
    } else {
        buttonTop.style.display = "none"
    }
}
buttonTop.addEventListener('click', () => {
    setTimeout(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        })
    }, 200)
})
// validation form
const form = document.querySelector('.form');
const inputs = document.querySelector('.input_text');
const nameForm = document.querySelector('.name');
const emailForm = document.querySelector('.email')
const errorName = document.querySelector('.error_message_name');
const errorEmail = document.querySelector('.error_message_email');
const checkbox = document.querySelector('.checkbox')
const policy = document.querySelector('.policy_label')
const submitBtn = document.querySelector('.submit_button')
const URL_FORM = "https://jsonplaceholder.typicode.com/posts"

const validateName = () => {
    const regexName = /[a-zA-Z]{2,100}/
    if (regexName.test(nameForm.value)) {
        errorName.style.visibility = "hidden";
        nameForm.classList.remove('error')
        nameForm.classList.add("correct")
    } else {
        errorName.style.visibility = "visible";
        nameForm.classList.remove('error')
        nameForm.classList.add("correct")
    }
}
const validateEmail = () => {
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (regexMail.test(emailForm.value)) {
        errorEmail.style.visibility = "hidden";
        emailForm.classList.remove('error')
        emailForm.classList.add("correct")
    } else {
        errorEmail.style.visibility = "visible";
        emailForm.classList.remove('error')
        emailForm.classList.add("correct")
    }
}
nameForm.addEventListener('input', validateName)
emailForm.addEventListener('input', validateEmail)

//data collection and sending to a server (fetch)
async function sendForm(email, name,url) {
    await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            name: name,
        }),
        headers: {
            'Content-type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then((data)=> console.log(data))
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(checkbox.checked){
        policy.classList.remove('not_checked');
        (nameForm.value&&emailForm.value)? sendForm(URL_FORM,nameForm.value,emailForm.value) : alert('complete all fields')
    }else policy.classList.add("not_checked")

})
// modal
const modalContainer = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close')
const btnSubmit = document.querySelector('.modal__btn')
const emailModal = document.querySelector('.modal__input')
const errorEmailModal = document.querySelector('.error_message_email_modal');
const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const modalActive = true
setTimeout(()=>{
    if(localStorage.getItem('modalActive')!== '1'){
        modalContainer.style.display = "block";
        localStorage.setItem('modalActive','1')
    }
},5000)

const showModal = () =>{
modalActive = false
}
document.addEventListener("ev",showModal)
document.addEventListener("scroll", ()=> {
    if (localStorage.getItem("modalActive") !== "1" && (scrollY/(document.body.offsetHeight - innerHeight))*100 >= 25) {
    modalContainer.style.display = "block";
    localStorage.setItem("modalActive", "1");
    }
})
modalClose.addEventListener("click",()=>{
    modalContainer.style.display = "none";
})
modalContainer.addEventListener("click", (e)=>{
    if(e.target === e.currentTarget){
        modalContainer.style.display = " none";
        
    }
})
window.addEventListener("keyup", (e)=>{
    if(e.key=== "Escape"){
        modalContainer.style.display = "none";
    }
})
btnSubmit.addEventListener("click",()=>{
    if(regexMail.test(emailModal.value)){
        sendForm(emailModal,"",URL_FORM)
        modalContainer.style.display = "none";
    }else {
        errorEmailModal.style.visibility = "visible";
        emailModal.classList.remove('error')
        emailModal.classList.add("correct")
    }

})
// currency exchange

const basicPrice = document.querySelector('#basic-price')
const professionalPrice = document.querySelector('#professional-price')
const premiumPrice = document.querySelector('#premium-price')
const selectPricing = document.querySelector('.select__pricing')
const URL_EXCHANGE = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'

const getCurrency = async (url, currency) => {
    const response = await fetch(url);
    const data = await response.json()
    console.log(data)
    if(currency ==="usd"){
        const currencyExchangeUsd = (data.usd.usd).toFixed(2)
        basicPrice.innerText = `$ ${0}`
        professionalPrice.innerText = `$ ${25 * currencyExchangeUsd}`
        premiumPrice.innerText = `$ ${60 * currencyExchangeUsd}`
        return currencyExchangeUsd
    }else if(currency === "eur"){
        const currencyExchangeEur = (data.usd.eur).toFixed(2)
        basicPrice.innerText = `€ ${0}`
        professionalPrice.innerText = `€ ${25 * currencyExchangeEur}`
        premiumPrice.innerText = `€ ${60 * currencyExchangeEur}`
        return currencyExchangeEur
    }else if(currency === "gbp"){
        const currencyExchangeGbp = (data.usd.gbp).toFixed(2)
        basicPrice.innerText = `£ ${0}`
        professionalPrice.innerText = `£ ${25 * currencyExchangeGbp}`
        premiumPrice.innerText = `£ ${60 * currencyExchangeGbp}`
        return currencyExchangeGbp
    }
}

selectPricing.addEventListener("change", () => getCurrency(URL_EXCHANGE, selectPricing.value))

//slider

class Slider {
    constructor(id){
        this.slider = document.querySelector(`.${id}`);
        this.sliderContainer = document.querySelector(`.${id}__container`);
        this.images = this.slider.getElementsByClassName(`.${id}__img`)
        this.showImage = 0
        // this.activeShowImage = this.showImage[0]
        this.imgLenght = this.sliderContainer.children.length;
        this.circles = document.querySelector(`.${id}__circle__group`).children;
        this.next = document.querySelector(`.${id} .arrow-right`)
        this.prev = document.querySelector(`.${id} .arrow-left`)

        this.changeImg();
        this.automaticSlider(2000);
    }
    showMoveSlider(){
        this.sliderContainer.style.transform = `translateX(-${this.showImage * this.slider.offsetWidth}px)`
        Array.from(this.circles).forEach(circle =>circle.classList.remove('active'))
        this.circles[this.showImage].classList.add('active')
    }
    nextImg(){
        this.showImage = this.showImage >= this.imgLenght - 1 ? 0: this.showImage +1;
        this.showMoveSlider()
    }
    prevImg(){
        this.showImage = this.showImage<= 0 ? this.imgLenght -1 : this.showImage -1;
        this.showMoveSlider()
        }
    changeImg(){
        this.next.addEventListener('click',this.nextImg.bind(this))
        this.prev.addEventListener('click', this.prevImg.bind(this))
    }    
    automaticSlider(timer){
        setInterval(this.nextImg.bind(this), timer)
    }
}
new Slider("slider")