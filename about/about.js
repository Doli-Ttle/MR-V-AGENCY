const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".about-us img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".text h2", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".text h5", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".text p", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal("hire", {
    ...scrollRevealOption,
    delay: 2000,
  });
  ScrollReveal().reveal(".wrapper .title", {
    ...scrollRevealOption,
    delay: 2500,
  });
  ScrollReveal().reveal(".card_Container .card", {
    ...scrollRevealOption,
    delay: 3000,
  });
  

  // ==================
  // Inspiration -  Frontend Mentor
// https://www.frontendmentor.io/challenges/myteam-multipage-website-mxlEauvW
const cardControllers = document.querySelectorAll("[data-card-controller]");

cardControllers.forEach(controller => {
  controller.addEventListener("click", (e) => {
    const card = e.currentTarget.parentElement.parentElement;
    const isVisible = card.dataset.visible;

    if (isVisible === "false") {
      card.setAttribute("data-visible", true);
    } else {
      card.setAttribute("data-visible", false);
    }
  })
})