const btnToggle = document.querySelector(".btn-toggle");

btnToggle.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.add("light");
    body.classList.remove("dark");
    btnToggle.innerHTML = `<i class="fa-solid fa-moon fa-2x"></i>`;
  } else if (body.classList.contains("light")) {
    body.classList.add("dark");
    body.classList.remove("light");
    btnToggle.innerHTML = `<i class="fa-solid fa-sun fa-2x"></i>`;
  }
});
