let index = 0;
let flipped = false;

const cardDiv = document.getElementById("card");
function randomIndex() {
  return Math.floor(Math.random() * kanjiData.length);
}

function showCard() {

  const card = kanjiData[index];

  if (!flipped) {
    cardDiv.innerHTML =
      `<div class="kanji">${card.kanji}</div>`;
  } else {

    let examplesHTML = "";

    if (card.examples) {
      card.examples.forEach(ex => {
        examplesHTML +=
          `<p>${ex.word} (${ex.reading}) — ${ex.meaning}</p>`;
      });
    }

    cardDiv.innerHTML = `
      <h3>${card.meanings.join(", ")}</h3>
      <p>${card.jpMeanings.join(" ・ ")}</p>
      <div class="examples">${examplesHTML}</div>
    `;
  }
}

cardDiv.addEventListener("click", () => {
  flipped = !flipped;
  showCard();
});

function nextCard() {
  index = randomIndex();
  flipped = false;
  showCard();
}

showCard();
