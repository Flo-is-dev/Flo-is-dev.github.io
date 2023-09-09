function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnSubmit = document.querySelector(".btn-submit");

// launch modal event, au click joue la fonction "launchModal"
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// fonction launch modal
function launchModal() {
  modalbg.style.display = "block";
}

//   On cible la croix de fermeture de modal,
const close = document.querySelector(".close");

//  au click la modal se ferme
close.addEventListener("click", () => {
  modalbg.style.display = "none";
});

const inputs = document.querySelectorAll(
  "input[type=text],input[type=email],input[type=date],input[type=number],input[type=radio],input[type=checkbox]"
);
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const spanCity = document.querySelector(".span-city");
const checkbox1 = document.getElementById("checkbox1");

const firstnameChecker = (value) => {
  if (value.length <= 1) {
    firstName.parentElement.classList.add("error");
    firstName.classList.add("error-input");
    return false;
  } else {
    firstName.parentElement.classList.remove("error");
    firstName.classList.remove("error-input");
    return true;
  }
};

const lastnameChecker = (value) => {
  //   console.log(value);
  //   const lastName = document.getElementById("last");
  if (value.length <= 1) {
    lastName.parentElement.classList.add("error");
    lastName.classList.add("error-input");
  } else {
    lastName.parentElement.classList.remove("error");
    lastName.classList.remove("error-input");
    return true;
  }
};

const emailChecker = (value) => {
  //   const email = document.getElementById("email");
  //   console.log(value);
  if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    email.parentElement.classList.add("error");
    email.classList.add("error-input");
  } else {
    email.classList.remove("error-input");
    email.parentElement.classList.remove("error");
    return true;
  }
};

// on met le formulaire à la date du jour
let today = new Date().toISOString().split("T")[0];
birthDate.value = today;
birthDate.max = today;

const birthdateChecker = (value) => {
  //   let currentDate = new Date();
  //   let birthdateDay = new Date(value);
  //   let diff = new Date(currentDate - birthdateDay);
  //   let age = Math.abs(diff.getUTCFullYear() - 1970);
  //   console.log(age);

  if (value === "") {
    birthDate.classList.add("error-input");
    birthDate.parentElement.classList.add("error");
  } else {
    birthDate.classList.remove("error-input");
    birthDate.parentElement.classList.remove("error");
    return true;
  }
};

const playChecker = (value) => {
  if (isNaN(value) || value < 0 || value > 99) {
    quantity.classList.add("error-input");
    quantity.parentElement.classList.add("error");
  } else {
    quantity.classList.remove("error-input");
    quantity.parentElement.classList.remove("error");
  }
};

// TODO ********************* input radio

const RadioBtn = document.querySelectorAll('input[name="location"]');
// const selectedRadio = document.querySelector('input[name="location"]:checked');
let cityChecked = false;

const cityChecker = (city) => {
  console.log(city);

  if (city) {
    spanCity.classList.remove("error");
    cityChecked = true;
  } else {
    spanCity.classList.add("error");
    cityChecked = false;
  }
};

// Création d'un forEach pour récupérer la valeur de chaque radio input individuellement

RadioBtn.forEach((radio) => {
  radio.addEventListener("change", () => {
    // *Appeler cityChecker avec la valeur du bouton radio sélectionné
    console.log(radio.value);
    cityChecker(radio.value);
  });
});

// TODO------------------

const cgvChecker = (value) => {
  if (value === false) {
    checkbox1.classList.add("error-input");
    checkbox1.parentElement.classList.add("error");
  } else {
    checkbox1.classList.remove("error-input");
    checkbox1.parentElement.classList.remove("error");
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstnameChecker(e.target.value);
        break;
      case "last":
        lastnameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        playChecker(e.target.value);
        break;
      case "checkbox1":
        cgvChecker(e.target.checked);
        break;
      default:
        null;
    }
  });
});

// *---------BTN SUBMIT ---------------------------------------------------

// Bouton qui permet de soumettre le formulaire. Affiche un message d'erreur si tous les champs ne sont pas valide
const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !firstnameChecker(firstName.value) ||
    !lastnameChecker(lastName.value) ||
    !emailChecker(email.value) ||
    !birthdateChecker(birthDate.value) ||
    !quantity.value ||
    //! Cette ligne est censsé etre vrai pk elle retourne un message comme si elle était fausse?....
    !cityChecked ||
    !checkbox1.checked
  ) {
    if (!firstName.value) {
      firstnameChecker("");
    }
    if (!lastName.value) {
      lastnameChecker("");
    }
    if (!emailChecker(email.value)) {
      emailChecker("");
    }
    if (!birthdateChecker(birthDate.value)) {
      birthdateChecker("");
    }
    if (!quantity.value) {
      playChecker(-1);
    }
    if (!cityChecked) {
      cityChecker(null);
      console.log("pas de VILLE");
    }
  } else {
    // Si toutes les conditions sont satisfaites, exécuter le reste du code
    // création d'un obket data pour exporter les données du formulaire
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      emailChecker: email.value,
      birthdateChecker: birthDate.value,
      playChecker: quantity.value,
      cityChecker: document.querySelector('input[name="location"]:checked')
        .value,
      cgvChecker: checkbox1.checked,
    };
    console.log(data);

    const modalBodySucced = document.querySelector(".modal-body-succed");
    modalBodySucced.classList.remove("disable");

    close.addEventListener("click", () => {
      const modalBodySucced = document.querySelector(".modal-body-succed");
      const myForm = document.getElementById("myForm");

      modalbg.style.display = "none";
      modalBodySucced.classList.add("disable");
      myForm.reset();
    });
  }
});

// *---------BTN END--------------------------------------------------------

const btnEnd = document.getElementById("btn-end");

// Boutton terminer qui permet de fermer la modal de confirmation d'inscription et de remttre le formulaire à zéro
btnEnd.addEventListener("click", () => {
  const modalBodySucced = document.querySelector(".modal-body-succed");
  const myForm = document.getElementById("myForm");

  modalbg.style.display = "none";
  modalBodySucced.classList.add("disable");
  myForm.reset();
});
