// **********************
// **********************
// Loader
// ***************************
// **********************
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("load-out");
});

// **********************
// **********************
// Banière cookies
// ***************************
// **********************

const btnA = document.querySelector(".btn-a");
const btnB = document.querySelector(".btn-b");
const btnC = document.querySelector(".btn-c");
const cook = document.querySelector(".cookies");

const asideCookie = document.querySelector(".aside-cookies");
const info = document.querySelector(".btn-info");
let valeurCle = localStorage.getItem("banniere");

const check = () => {
  if (valeurCle) {
    // console.log("cookie deja existant");
    cook.remove();
    document.body.style.overflow = "auto";
    asideCookie.style.visibility = "hidden";
    // document.body.style.background = "none";
  } else {
    // console.log("cookie non existant");
  }
};

check();

btnA.addEventListener("click", () => {
  cook.style.opacity = 0;
  info.style.opacity = 0;
  asideCookie.style.visibility = "hidden";
  localStorage.setItem("banniere", "oui");
  document.body.style.overflow = "auto";
});

btnC.addEventListener("click", () => {
  console.log("ca clickk C");
  cook.style.opacity = 0;
  info.style.opacity = 0;
  asideCookie.style.visibility = "hidden";
  localStorage.setItem("banniere", "oui");
  document.body.style.overflow = "auto";
});

btnB.addEventListener("click", () => {
  info.style.opacity = 1;
  foot.classList.toggle("btn-info");
});

// **********************
// **********************
// Nav barre event + GSAp anim on window.load
// ***************************
// **********************

const nav = document.querySelector("nav");
const button = document.getElementById("button");
const headerH1 = document.getElementById("header-h1");
const card = document.querySelector(".card");
const circle = document.querySelector(".header-right-circle1");
const headerImg = document.querySelector(".header-right-img");
const headerRightCard = document.querySelector(".header-right-card");
const brandCard = document.querySelector(".brand-card");
const header = document.querySelector("header");

const TL = gsap.timeline({ paused: true, stagger: 0.1 });

TL.from(nav, {
  y: -150,
  duration: 0.8,
  ease: "back.out(1.5)",
});

window.addEventListener("load", () => {
  TL.play();

  gsap.from(headerH1, {
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "back.out(1.2)",
  });
  gsap.from(card, {
    x: -50,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "back.out(1.2)",
  });
  gsap.from(circle, {
    y: 40,
    scale: 0.8,
    opacity: 0,
    duration: 3,
    delay: 0.7,
    ease: "back.out(1.2)",
  });
  gsap.from(headerImg, {
    opacity: 0,
    duration: 1,
    delay: 0.8,
    ease: "back.out(1.1)",
  });
  gsap.from(headerRightCard, {
    opacity: 0,
    duration: 1,
    delay: 0.9,
    ease: "back.out(1.2)",
  });
});

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);

  if (window.scrollY > 400 || window.scrollY < 10) {
    nav.style.position = "fixed";
    nav.style.border = "1px solid #f0f0f0";
    TL.play();
  } else {
    nav.style.position = "absolute";
    TL.reverse();
  }
});

// **********************
// **********************
// nav bar mobile
// ***************************
// **********************

const sidebar = document.getElementById("side-bar");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  console.log("ca click");
});

sidebar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// **********************
// **********************
// Barre modal
// ***************************
// **********************

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", () => {
    toggleModal();
    // document.body.style.overflow = "hidden";
  })
);

const toggleModal = () => {
  modalContainer.classList.toggle("active");
};

// *****************************
// ************************
// Card de reservation/prix
// *****************************
// *****************************

// Convert today date into input format
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

// Tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// console.log(tomorrow);

// Convert to input format

let tomorrowFormat = tomorrow.toISOString().split("T")[0];
// console.log(tomorrowFormat);
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  // console.log(day);
  if (end_date.value <= start_date.value) {
    day.setDate(day.getDate() + 1);
    // console.log(day);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);
  day.setDate(day.getDate() - 1);

  if (end_date.value <= start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.max = day.toISOString().split("T")[0];
  }
});

const bookingCalc = () => {
  const carSelect = document.getElementById("car-select");

  carSelect.addEventListener("change", (e) => {
    // console.log(e.target.value);

    if (e.target.value === "BMWx1") {
      nightPrice.textContent = "76";
    } else if (e.target.value === "Hyundaikona") {
      nightPrice.textContent = "57";
    } else if (e.target.value === "Skodakodiaq") {
      nightPrice.textContent = "46";
    } else if (e.target.value === "Teslamodely") {
      nightPrice.textContent = "98";
    } else {
      nightPrice.textContent = "-- ";
    }

    // fonction fléché pour changer et ne pas écrire function
    let diffTime = Math.abs(
      new Date(end_date.value) - new Date(start_date.value)
    );
    // console.log(diffTime);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // console.log(diffDays);
    total.textContent = diffDays * nightPrice.textContent;
  });
};

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();

const cardButton = document.querySelector(".card-button");

cardButton.addEventListener("click", () => {
  confirm(
    `Votre reservation a bien été prise en compte 🌱 🚗 pour un total de ${total.textContent}€.`
  );
});

// **********************
// **********************
// Formulaire d'inscription
// ***************************
// **********************

const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password']"
);
const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

// console.log(inputs);

const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

const pseudoChecker = (value) => {
  // console.log(value);
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
  }
};

const emailChecker = (value) => {
  // console.log(value);
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email", "Le mail n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  // console.log(value);
  progressBar.classList = "";
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    // console.log("test");
    errorDisplay(
      "password",
      "Min 8 caractères, une majuscule, un chiffre et un spécial"
    );
    progressBar.classList.add("progressRed");
    password = null;
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
};

const confirmChecker = (value) => {
  // console.log(value);
  if (value !== password) {
    // console.log("error");
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // console.log(e.target.id);
    // console.log(e.target.value); ce qui est tapper à cahque fois
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        nul;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo: pseudo,
      email: email,
      password: password,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));
    progressBar.classList = "";

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;
    alert("Inscription validée (Site de démo)");
  }
  // else {
  //   alert(
  //     "Veuillez remplir correctement les champs pour valider l'inscription (fictivement)"
  //   );
  // }
});

// ******************
// ******************
// Hover du carousel
// ******************
// ******************

const carouselCard = document.querySelectorAll(".carousel-card");

carouselCard.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.style.background = "#24dfc6";
  });
  item.addEventListener("mouseout", (e) => {
    e.target.style.background = "#f0f0f0";
  });
});

// ******************
// ******************
// Evenement de la checkbox
// ******************
// ******************

const checkboxAdresse = document.getElementById("checkbox-adresse");
const checkboxDiv = document.querySelector(".checkbox-div");
const adresseRetour = document.getElementById("adresse-retour");

checkboxAdresse.addEventListener("change", () => {
  checkboxDiv.style.display = "none";
  adresseRetour.style.display = "block";
});

// ******************
// ******************
// Evenement FAQ footer
// ******************
// ******************
const questions = document.querySelectorAll(".question");

questions.forEach((item) => {
  item.addEventListener("click", () => {
    const next = item.nextElementSibling;
    next.classList.toggle("visible");
    icone = item.lastElementChild;
    icone.classList.toggle("fa-chevron-up");
  });
});

// ******************
// ******************
// GSAP animation
// ******************
// ******************
