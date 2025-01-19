const themeSelector = document.querySelector("#theme");

function changeTheme() {
    const body = document.body;
    const logo = document.querySelector("#logo");

    if (themeSelector.value === "dark") {
        body.classList.add("dark");
        logo.src = "byui.png";
    } else {
        body.classList.remove("dark");
        logo.src = "logo_blue.webp";
    }
}

themeSelector.addEventListener("change", changeTheme);
