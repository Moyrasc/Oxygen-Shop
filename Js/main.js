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
