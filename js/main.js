const infoBtns=document.querySelectorAll(".info-dot");
const infoHints=document.querySelectorAll(".info-hint");

infoBtns.forEach(btn=>{
    btn.addEventListener("click", showHint)
});

function showHint(e){
    e.stopPropagation();
    const hint=this.parentNode.querySelector(".info-hint");
    hint.classList.toggle("none");
    
}

document.addEventListener("click", closeHint);

function closeHint(e){
    e.stopPropagation();
    infoHints.forEach(hint=>{
        hint.classList.add("none");
    })
}

infoHints.forEach((hint=>{
    hint.addEventListener("click",function (e){
        e.stopPropagation();
    })
}));


///Swiper
const swiper = new Swiper('.swiper', {
    freeMode: true,
    loop: true,
    slidesPerView:1,
    breakpoints:{
        600:{
            slidesPerView: 2,
            spaceBetween: 20
        },
        920:{
            slidesPerView: 3,
            spaceBetween: 20
        },
        1230:{
            slidesPerView: 4,
            spaceBetween: 42
        }
        },
    navigation: {
        nextEl: '#sliderNext',
        prevEl: '#sliderPrev',
    }
});

///Tabs
const tabsBtns=document.querySelectorAll("[data-tab]");
const tabsProducts=document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns){
    btn.addEventListener("click",function(){
        for (let btn of tabsBtns){
            btn.classList.remove("tab-controls__btn-active");
        }
        this.classList.add("tab-controls__btn-active");
        
        //Display products that we need and hide products we don't need
        for (let product of tabsProducts){
            //Check for tab all
            if (this.dataset.tab==='all'){
                product.classList.remove("none")
            }
            else {
                if (product.dataset.tabValue===this.dataset.tab){
                    product.classList.remove("none")
                }else {
                    product.classList.add("none")
                }
            }
        }
        //Update swiper for truth initialization
        swiper.update();
    })
}

//Burger Menu
const mobileNavOpen = document.querySelector("#nav-open");
const mobileNavClose = document.querySelector(".mobile-mav-btn-close");
const mobileNav = document.querySelector(".nav-mobile-wrapper");

mobileNavOpen.addEventListener("click",()=>{
    mobileNav.classList.add("nav-mobile-wrapper-open");
});

mobileNavClose.addEventListener("click",()=>{
    mobileNav.classList.remove("nav-mobile-wrapper-open");
})
