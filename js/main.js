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

