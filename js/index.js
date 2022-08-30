const buttonBookmark = document.querySelector('[data-js="btn-bookmark"]');
const bookmarkElement = document.querySelector('[data-js="bookmark-element"]');

buttonBookmark.addEventListener("click", () => {
  console.log("Button bookmark clicked");
  bookmarkElement.classList.toggle("fa-regular");
  bookmarkElement.classList.toggle("fa-solid");
});
