document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");
    if (footer) {
        const img = document.createElement("img");
        img.src = "_static/1.svg"; // sua logo
        img.alt = "Logo BiguaSim";
        img.style.width = "60px";   // tamanho pequeno
        img.style.height = "auto";
        img.style.float = "right";  // joga pra direita
        img.style.marginLeft = "10px";

        footer.appendChild(img);
    }
});
