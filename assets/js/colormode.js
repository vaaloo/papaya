document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById("darkModeToggleOne");
    const darkModeToggleTwo = document.getElementById("darkModeToggleTwo");
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        const isDarkMode = body.classList.contains("dark-mode");
        localStorage.setItem("darkMode", isDarkMode);

        let link = document.getElementById("darkModeStylesheet");
        if (link.href.includes("dark")) {
            link.href = link.href.replace("dark", "light");
            darkModeToggle.src = darkModeToggle.src.replace("light-mode.png", "night-mode.png");
            darkModeToggleTwo.src = darkModeToggleTwo.src.replace("light-mode.png", "night-mode.png");
        } else if (link.href.includes("light")) {
            link.href = link.href.replace("light", "dark");
            darkModeToggle.src = darkModeToggle.src.replace("night-mode.png", "light-mode.png");
            darkModeToggleTwo.src = darkModeToggleTwo.src.replace("night-mode.png", "light-mode.png");
        } else {
            throw new Error("Unknown stylesheet", link.href);
        }
    }

    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
        toggleDarkMode();
    }
    darkModeToggle.addEventListener("click", toggleDarkMode);
    darkModeToggleTwo.addEventListener("click", toggleDarkMode);
});
