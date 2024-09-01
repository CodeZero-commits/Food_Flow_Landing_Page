document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isOpen = question.classList.contains("active");

      // Cerrar todas las respuestas
      faqQuestions.forEach((q) => {
        q.classList.remove("active");
        q.nextElementSibling.style.maxHeight = null;
      });

      // Si la pregunta no estaba abierta, ábrela
      if (!isOpen) {
        question.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".btnMenu");
  const menuItems = document.querySelector(".menu-items");

  menuButton.addEventListener("click", function () {
    menuItems.classList.toggle("show");

    // Actualizar el atributo aria-expanded
    const isExpanded = menuItems.classList.contains("show");
    menuButton.setAttribute("aria-expanded", isExpanded);
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener("click", function (event) {
    const isClickInsideMenu = menuItems.contains(event.target);
    const isClickOnMenuButton = menuButton.contains(event.target);

    if (
      !isClickInsideMenu &&
      !isClickOnMenuButton &&
      menuItems.classList.contains("show")
    ) {
      menuItems.classList.remove("show");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  // Manejar la navegación con teclado
  menuItems.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      menuItems.classList.remove("show");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.focus();
    }
  });
});
