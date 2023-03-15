// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.y + "px";
//   cursor.style.left = e.x + "px";

//   mouse1.style.top = e.y + "px";
//   mouse1.style.left = e.x + "px";

//   mouse2.style.top = e.y + "px";
//   mouse2.style.left = e.x + "px";
// });

const mouses = document.querySelectorAll(".mouse");
// console.log(mouses);

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
  });
});

const nav = document.querySelector(".toggle-btn");
const navMobile = document.querySelector(".nav-mobile");

// nav.addEventListener("click", () => {
//   navMobile.style.right = "-5px";
// });

// ********************

const sidebar = document.querySelector(".nav-mobile");
const content = document.querySelector(".content");

nav.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
