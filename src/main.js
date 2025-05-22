import "./style.scss";

const dummyLinks = [
    { id: 1, link: "Pirate", categories: [] },
    { id: 2, link: "Parrots", categories: ["Red", "Violet", "Yellow", "Green"] },
    { id: 3, link: "Ships", categories: [] },
    { id: 4, link: "Events", categories: [] },
];

const dummyData = [
    {
        id: 1,
        img: "/Brigantino.png",
        title: "Boom belaying",
        content: "Pirate ipsum arrgh bounty warp jack.",
    },
    {
        id: 2,
        img: "/Brigantino.png",
        title: "Boom belaying",
        content: "Pirate ipsum arrgh bounty warp jack.",
    },
    {
        id: 3,
        img: "/Brigantino.png",
        title: "Boom belaying",
        content: "Pirate ipsum arrgh bounty warp jack.",
    },
    {
        id: 4,
        img: "/Brigantino.png",
        title: "Boom belaying",
        content: "Pirate ipsum arrgh bounty warp jack.",
    },
    {
        id: 5,
        img: "/Brigantino.png",
        title: "Boom belaying",
        content: "Pirate ipsum arrgh bounty warp jack.",
    },
    {
        id: 6,
        img: "/Brigantino.png",
        title: "Boom belaying",
        content: "Pirate ipsum arrgh bounty warp jack.",
    },
];

const dummyTimeLine = [
    { id: 1, title: "" },
    { id: 2, title: "" },
    { id: 3, title: "" },
];

//links handlin
const linksContainer = document.getElementById("nav__links");
const navCategories = document.getElementById("nav__categoriesContainer");

dummyLinks.forEach((element) => {
    const link = document.createElement("li");
    link.textContent = element.link;
    linksContainer.appendChild(link);

    link.addEventListener("click", (event) => {
        event.preventDefault();
        navCategories.innerHTML = "";

        if (element.categories.length > 0) {
            navCategories.classList.toggle("nav__categoriesContainerActive");
            element.categories.forEach((category) => {
                const subLink = document.createElement("li");
                subLink.textContent = category;
                navCategories.appendChild(subLink);
            });
        } else {
            navCategories.classList.remove("nav__categoriesContainerActive");
        }
    });
});

//sidebar handling
const hamburger = document.getElementById("hamburgher");
const sidebarMain = document.getElementById("sidebarMain");
const sidebarSub = document.getElementById("sidebarSub");
const closeSidebar = document.getElementById("sidebar__close");
const closeAllSidebar = document.getElementById("sidebarSub__close");
// const openSidebarSub = document.getElementById("openSidebarSub");
const rollback = document.getElementById("rollback");

hamburger.addEventListener("click", () => {
    sidebarMain.classList.add("showMainSidebar");
    const ul = document.getElementById("sidebar__list");
    ul.innerHTML = "";

    dummyLinks.forEach((element) => {
        const container = document.createElement("div");
        container.classList.add("sidebarLinkContainer");

        const link = document.createElement("li");
        link.textContent = element.link;

        const arrow = document.createElement("div");
        arrow.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;

        container.appendChild(link);
        ul.appendChild(container);

        if (element.categories.length > 0) {
            const arrow = document.createElement("div");
            arrow.innerHTML = `<i class="fa-solid fa-caret-right"></i>`;
            arrow.classList.add("openSubArrow");
            container.appendChild(arrow);

            arrow.addEventListener("click", (e) => {
                e.stopPropagation();
                sidebarSub.classList.add("showSubSidebar");

                const sidebarSubCategories =
                    document.getElementById("sidebarSub__list");
                sidebarSubCategories.innerHTML = "";

                element.categories.forEach((category) => {
                    const subLink = document.createElement("li");
                    subLink.textContent = category;
                    sidebarSubCategories.appendChild(subLink);
                });
            });
        }
    });
});

closeSidebar.addEventListener("click", () => {
    sidebarMain.classList.remove("showMainSidebar");
});

rollback.addEventListener("click", () => {
    sidebarSub.classList.remove("showSubSidebar");
});

closeAllSidebar.addEventListener("click", () => {
    sidebarSub.classList.remove("showSubSidebar");
    sidebarMain.classList.remove("showMainSidebar");
});

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

//timeLine handling
const timeContainer = document.getElementById("timeContainer");

dummyTimeLine.forEach((element, index) => {
    const timeElement = document.createElement("div");
    timeElement.className = "timeElement";

    const lastElement = index === dummyTimeLine.length - 1;

    timeElement.innerHTML = `
        <div class="timeElementContainer">
            <div class="timeElementLine"></div>
            <div class="timeElement">${element.id}</div>
            <div class="timeElementLine"></div>
        </div>
    `;

    timeContainer.appendChild(timeElement);
});

//navbar - scroll handling
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("nav__scrolled");
    } else {
        navbar.classList.remove("nav__scrolled");
    }
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



