const infoBtns=document.querySelectorAll(".info-dot");
const infoHints=document.querySelectorAll(".info-hint");

for (btn of infoBtns){
    btn.addEventListener("click",showHint);
}

function showHint(e){
    e.stopPropagation();
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
    
}

document.addEventListener("click", closeHint);

function closeHint(e){
    e.stopPropagation();
    for (let hint of infoHints){
        hint.classList.add("none");
    } 
}

for(let hint of infoHints){
    hint.addEventListener("click", function (e){
        e.stopPropagation();
    })
}


///Swiper
const swiper = new Swiper('.swiper', {
    freeMode: true,
    loop: true,
    slidesPerView:4,
    spaceBetween: 42,
    // breakpoints:{
    //     640:{
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     768:{
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     1024:{
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    // },
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