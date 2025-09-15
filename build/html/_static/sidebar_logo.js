document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".wy-menu-vertical");
    if (sidebar) {
        // Cria um <li> exclusivo para a logo
        const li = document.createElement("li");
        li.classList.add("sidebar-logo-bottom"); // para CSS

        // Cria a imagem da logo
        const img = document.createElement("img");
        img.src = "./_static/sidebar.svg";  // caminho correto
        img.alt = "Logo BiguaSim";          // importante para evitar o ícone
        img.style.width = "240px";          // ajuste largura
        img.style.height = "auto";

        li.appendChild(img);
        sidebar.appendChild(li); // adiciona ao final da lista
    }
});
