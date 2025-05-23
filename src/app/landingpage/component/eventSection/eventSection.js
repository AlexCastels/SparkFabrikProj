import { dummyData } from "../../../../static";

//card handling
const cardContainer = document.getElementById("cardContainer");

dummyData.forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${element.img}" alt="${element.title}"/>
        <div class="card__contentContainer">
            <h3>${element.title}</h3>
            <p>${element.content}</p>
        </div>
        <div class="card__buttonContainer">
            <button class="card__button"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
    `;
    cardContainer.appendChild(card);
});



//splideJS handling
let splide ;
const splideList = document.getElementById("splideList");
const splidePrev = document.querySelector('.splideArrows__prev') ;
const splideNext = document.querySelector('.splideArrows__next') ;

dummyData.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("splide__slide" , "slideContainer");
    li.innerHTML = `
        <div class="card">
            <img src="${element.img}" alt="${element.title}" />
            <div class="card__contentContainer">
                <h3>${element.title}</h3>
                <p>${element.content}</p>
            </div>
            <div class="card__buttonContainer">
            <button class="card__button">
                <i class="fa-solid fa-arrow-right"></i>
            </button>
            </div>
        </div>
    `;
    splideList.appendChild(li);
});

document.addEventListener("DOMContentLoaded", () => {
    splide = new Splide("#image-slider", {
        type: "loop",
        perPage: 1,
        autoplay: false,
        arrows: false
    }) ;
    splide.mount();
    
    splidePrev.addEventListener('click', () => splide.go('<')) ;
    splideNext.addEventListener('click', () => splide.go('>')) ;
});