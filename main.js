document.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault();
    function menuOnMobile(){
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
    }

    menuOnMobile();
})

document.addEventListener("DOMContentLoaded", function() {
    
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
        event.preventDefault();
        
        const href = this.getAttribute("href");
        loadContent(href);
        });
  });

    function loadContent(url) {
        fetch(url)
        .then(response => response.text())
        .then(html => {
            const content = document.getElementById("content");
            content.innerHTML = html;
        })
        .catch(error => console.error("Erro ao carregar o conteúdo:", error));
    };
})