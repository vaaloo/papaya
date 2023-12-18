document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggleOne");
    const darkModeToggleTwo = document.getElementById("darkModeToggleTwo");
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);
        const stylesheetPath = isDarkMode ? "../assets/css/dark.css" : "../assets/css/light.css";
        const iconPath = isDarkMode ? "../assets/img/light-mode.png" : "../assets/img/night-mode.png";
        let link = document.getElementById("darkModeStylesheet");
        if (!link) {
            link = document.createElement("link");
            link.id = "darkModeStylesheet";
            link.rel = "stylesheet";
            document.head.appendChild(link);
        }
        link.href = stylesheetPath;

        darkModeToggle.src = iconPath;
        darkModeToggleTwo.src = iconPath;
    }
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
        toggleDarkMode();
    }
    darkModeToggle.addEventListener("click", toggleDarkMode);
    darkModeToggleTwo.addEventListener("click", toggleDarkMode);
});
