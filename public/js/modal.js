const $cards = document.querySelectorAll(".card");
const $modal = document.querySelector(".modal-wrapper");
const $closeModal = $modal.querySelector(".close");
const $modalImage = $modal.querySelector("img");
let $modalTitle = $modal.querySelector(".title");
let $modalChef = $modal.querySelector(".chef");

for (let $card of $cards) {
  const $cardImage = $card.querySelector("img");
  const $cardTitle = $card.querySelector(".title");
  const $cardChef = $card.querySelector(".chef");

  $card.addEventListener("click", function() {
    $modalImage.src = $cardImage.src;
    $modalTitle.textContent = $cardTitle.textContent;
    $modalChef.textContent = $cardChef.textContent;
    $modal.classList.add("-active");
  });
}

$closeModal.addEventListener("click", function() {
  $modal.classList.remove("-active");
});
