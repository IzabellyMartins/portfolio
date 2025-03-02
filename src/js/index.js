document.addEventListener("DOMContentLoaded", function () {
  // Carregando a navbar em todas as páginas
  fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('navbar-container').innerHTML = data;
          const menuToggle = document.querySelector(".menu-toggle");
          const nav = document.querySelector("nav");
          const ul = nav.querySelector("ul");

          menuToggle.addEventListener("click", function () {
              ul.classList.toggle("show"); 
          });
      })
      .catch(error => console.error('Erro ao carregar a navbar:', error));

  // Carregando o footer em todas as páginas
  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.getElementById('footer-dinamico').innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar o footer:', error));
});

