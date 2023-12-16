document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        const stylesheetPath = body.classList.contains("dark-mode") ? "../assets/css/dark.css" : "../assets/css/light.css";
        const iconPath = body.classList.contains("dark-mode") ? "../assets/img/light-mode.png" : "../assets/img/night-mode.png";

        let link = document.getElementById("darkModeStylesheet");
        if (!link) {
            link = document.createElement("link");
            link.id = "darkModeStylesheet";
            link.rel = "stylesheet";
            document.head.appendChild(link);
        }
        link.href = stylesheetPath;

        darkModeToggle.src = iconPath;
    });
});
