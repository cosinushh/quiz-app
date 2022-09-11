const cardsContainer = document.querySelector('[data-js="cards-container"]');
const form = document.querySelector('[data-js="question-form"]');
// const formButton = document.querySelector('[data-js="question-form__button"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createNewCard(event);
});

function createNewCard(event) {
  const newCard = document.createElement("article");
  newCard.classList.add("card");
  newCard.innerHTML = `
    <button class="card__bookmark" data-js="card__bookmark" aria-label="Bookmark this question"><i class="fa-regular fa-bookmark" data-js="card__bookmark-icon"></i></button>
        <p class="card__question" data-js="card-question">question text</p>
        <button class="card__answer-button" data-js="answer-button">Show answer</button>
        <p class="card__answer card--hidden" data-js="card-answer">answer text</p>
        <ul class="card__tags">
          <li class="card__single-tag" data-js="card-single-tag">#tag text</p>
        </ul>
    `;

  const answerButton = newCard.querySelector('[data-js="answer-button"]');
  const answerText = newCard.querySelector('[data-js="card-answer"]');
  const bookmarkButton = newCard.querySelector('[data-js="card__bookmark"]');
  const bookmarkElement = newCard.querySelector(
    '[data-js="card__bookmark-icon"]'
  );

  answerButton.addEventListener("click", () => {
    answerText.classList.toggle("card--hidden");
    answerButton.textContent = answerText.classList.contains("card--hidden")
      ? "Show answer"
      : "Hide answer";
  });

  bookmarkButton.addEventListener("click", () => {
    bookmarkElement.classList.toggle("fa-regular");
    bookmarkElement.classList.toggle("fa-solid");
  });

  newCard.querySelector('[data-js="card-question"]').textContent =
    event.target.questionInput.value;
  answerText.textContent = event.target.answerInput.value;
  newCard.querySelector('[data-js="card-single-tag"]').textContent =
    event.target.tagInput.value;
  cardsContainer.append(newCard);
}
