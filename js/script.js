const show = document.querySelector(".show-galeri");
const image = document.querySelector(".image img");
const galeri = document.querySelectorAll(".galeri-foto");
const iconMenu = document.querySelector(".icon-menu");
const tempat = document.querySelector(".tempat");
const btnMenu = document.querySelectorAll(".menu a");

for (let i = 0; i < galeri.length; i++) {
    const foto = galeri[i].querySelector("img");

    galeri[i].addEventListener("click", (e) => {
        e.preventDefault;

        show.style.display = "flex";
        image.src = foto.src;
    });
}

show.addEventListener("click", (e) => {
    e.preventDefault;

    show.style.display = "none";
});

iconMenu.addEventListener("click", (e)=>{
    e.preventDefault;
    tempat.classList.toggle("dw")
})

for (let i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener("click",(e)=>{
        e.preventDefault;

        tempat.classList.remove("dw")
    })
    
}