// Colocando o modo dark e light
const themeToggleButton = document.getElementById("theme-toggle");
const body = document.body;
const header = document.getElementById("main-header");

themeToggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
    header.classList.toggle("dark-theme");
    header.classList.toggle("light-theme");

    // Alterar ícone do botão de acordo com o tema
    const icon = themeToggleButton.querySelector("i");
    if (body.classList.contains("dark-theme")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});



