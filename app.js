// open map selection
const selectGame_BTN = document.querySelectorAll(".games");
const mainContainer = document.querySelector(".main-container");

selectGame_BTN.forEach((btn) => {
    btn.addEventListener("click", () => {
        mainContainer.style.display = "none";
        const modalData = btn.getAttribute("data-games");
        const modal = document.getElementById(modalData);

        modal.classList.add("show-modal-JS");
        modal.classList.remove("hide-modal-JS");
    });
});


// close map selection
closeMapSelection = () => {
    mainContainer.style.display = "grid";

    const modals = document.querySelectorAll(".main-modal-container");
    modals.forEach((modal) => {
        modal.classList.add("hide-modal-JS");
    })
}

const closeBtns = document.querySelectorAll(".close-map-selection");

closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        closeMapSelection();
    });
});


// open map stats
const selectMap_BTN = document.querySelectorAll(".maps");

selectMap_BTN.forEach((btn) => {
    btn.addEventListener("click", () => {
        const mapStatsData = btn.getAttribute("data-maps");
        const mapStats = document.getElementById(mapStatsData);

        console.log(mapStats)

        if(mapStats == null){
            alert("not attempted or not added")
        }
        else{
            mapStats.classList.add("show-gamestats-JS");
            mapStats.classList.remove("hide-gamestats-JS");
        }
    
    });
});
// close map stats
const closeMapsStats_BTN = document.querySelectorAll(".close-map-stats");

closeMapStats = () => {
    const mapStats = document.querySelectorAll(".game-stats-container");

    mapStats.forEach((section) => {
        section.classList.add("hide-gamestats-JS");
    });
}

closeMapsStats_BTN.forEach((btn) => {
    btn.addEventListener("click", () => {
        closeMapStats();
    });
});


// accordion function
const openAccordion_BTN = document.querySelectorAll(".open-acc-panel");

openAccordion_BTN.forEach((btn) => {
    btn.addEventListener("click", () => {
        const accordionData = btn.getAttribute("data-accordion");
        const accordion = document.getElementById(accordionData);

        accordion.classList.toggle("open-accordion-JS");
    });
});
