/**
 * explications
 */

function shufflePhrase(phrase) {
  let words = phrase.split(" "); // Sépare la phrase en mots
  let shuffledWords = [];

  // Parcours tous les mots de la phrase
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    // Ne mélange pas le premier ni le dernier caractère du mot
    if (word.length > 2) {
      let first = word.charAt(0);
      let last = word.charAt(word.length - 1);
      let middle = word
        .substring(1, word.length - 1)
        .split("")
        .sort(function () {
          return 0.5 - Math.random();
        })
        .join("");
      word = first + middle + last;
    }

    shuffledWords.push(word); // Ajoute le mot mélangé à la liste
  }

  let shuffledPhrase = shuffledWords.join(" "); // Rassemble les mots en une phrase
  return shuffledPhrase;
}

function shuffle() {
  // Récupère le mot saisi par l'utilisateur
  let word = document.getElementById("word-input").value;
  console.log(word);

  // Mélange les lettres du mot
  let shuffledWord = shufflePhrase(word);
  console.log(shuffledWord);

  // Affiche le mot mélangé dans la page
  document.getElementById("result").textContent = shuffledWord;
}
