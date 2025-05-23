import { dummyTimeLine } from "../../../../static";

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