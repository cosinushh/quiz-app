const buttonBookmark = document.querySelector('[data-js="card__bookmark"]');
const bookmarkElement = document.querySelector(
  '[data-js="card__bookmark-icon"]'
);

buttonBookmark.addEventListener("click", () => {
  console.log("Button bookmark clicked");
  bookmarkElement.classList.toggle("fa-regular");
  bookmarkElement.classList.toggle("fa-solid");
});
