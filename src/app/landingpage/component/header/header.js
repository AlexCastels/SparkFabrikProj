import { dummyLinks } from "../../../../static";

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

//navbar - scroll handling
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("nav__scrolled");
    } else {
        navbar.classList.remove("nav__scrolled");
    }
});

//sidebar handling
const hamburger = document.getElementById("hamburgher");
const sidebarMain = document.getElementById("sidebarMain");
const sidebarSub = document.getElementById("sidebarSub");
const closeSidebar = document.getElementById("sidebar__close");
const closeAllSidebar = document.getElementById("sidebarSub__close");
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

