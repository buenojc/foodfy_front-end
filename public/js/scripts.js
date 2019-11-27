const $cards = document.querySelectorAll(".card");
const $recipeInfo = document.querySelectorAll(".information");
const $btn = document.querySelectorAll(".btn");

let show = false;

for (let i = 0; i < $cards.length; i++) {
  $cards[i].addEventListener("click", function() {
    window.location.href = `receitas/${i}`;
  });
}

for (let i = 0; i < $btn.length; i++) {
  $btn[i].addEventListener("click", function() {
    $recipeInfo[i].classList.toggle("-active");

    if ($btn[i].textContent == "Mostrar") {
      $btn[i].textContent = "Esconder";
    } else {
      $btn[i].textContent = "Mostrar";
    }
  });
}
