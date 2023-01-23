//header-navbar
const headerButtonBurguer = document.querySelector('.header_btn')
const headerButtonClose = document.querySelector('.header_btn_close')
const headerIcons = document.querySelectorAll('.header_icon')
const navLinks = document.querySelector('.nav_links')

headerIcons.forEach(item => {
    item.addEventListener("click",(e)=>{
        navLinks.classList.toggle("nav_links_hidden");
        headerButtonBurguer.classList.toggle("hidden");
        headerButtonClose.classList.toggle("hidden");
        
    })
})

//percentage scroller
const percentageScroller = document.querySelector('.percentage-scroller')
window.addEventListener("scroll", () =>{
let scrollPercentage = Math.round(((window.scrollY)/ (document.body.offsetHeight - window.innerHeight))* 100);

percentageScroller.style.width = scrollPercentage + "%";
})

// Return to the top
const buttonTop = document.querySelector('#btn-top');
window.onscroll = () =>scrollFunction()
const scrollFunction = () =>{
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        buttonTop.style.display = "block"
    }else {
        buttonTop.style.display = "none"
    }
}
buttonTop.addEventListener('click',()=>{
    setTimeout(() => {
    window.scroll({
        top:0,
        behavior: "smooth",
    })
}, 200)
})
// validation form

const form = document.querySelector('.form');
const inputs = document.querySelector('.input_text');
const nameForm = document.querySelector('.name');
const emailForm= document.querySelector('.email')
const errorName =document.querySelector('error_message_name');
const errorEmail = document.querySelector('.error_message_email');
const checkbox = document.querySelector('.checkbox')
const policy = document.querySelector('.policy_label')

const validateForm = (e) => {
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const regexName = /[a-zA-Z]{2,100}/

    if(e.target.name ==="name"){
        if(regexName.test(e.target.value)){
            errorName.style.visibility = "hidden";
            nameForm.classList.remove('error')
            nameForm.classList.add("correct")
        }else {
            errorName.style.visibility = "visible";
            nameForm.classList.remove('error')
            nameForm.classList.add("correct")
        }
    }
    if(e.target.name === "email") {
        if(regexMail.test(e.target.value)){
            errorEmail.style.visibility = "hidden";
            emailForm.classList.remove('error')
            emailForm.classList.add("correct")
        }else {
            errorEmail.style.visibility = "visible";
            emailForm.classList.remove('error')
            emailForm.classList.add("correct")
        }
    }

    inputs.forEach((input) => {
    input.addEventListener("keydown", validateForm);
});

}