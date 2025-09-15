document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.innerText = "🌙/☀️";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.padding = "10px";
    button.style.borderRadius = "8px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.zIndex = "9999";
    button.style.background = "#036B9D";
    button.style.color = "white";
    document.body.appendChild(button);

    // Recupera preferência salva
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.documentElement.classList.add("dark-mode");
    }

    button.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        document.documentElement.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
