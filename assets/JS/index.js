const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// Mise à jour du scroll après le chargement de la page
window.addEventListener("load", () => {
  scroll.update();
});

scroll.on("scroll", () => {
  const colorElement = document.querySelector("#color");

  if (colorElement && colorElement.classList.contains("is-inview")) {
    document.body.style.background = "#000101";
    document.body.style.color = "#fefeff";
  } else {
    document.body.style.background = "#fefeff";
    document.body.style.color = "#000101";
  }
});
