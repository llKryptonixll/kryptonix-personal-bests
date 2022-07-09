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