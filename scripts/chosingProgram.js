const caloriesBtns = document.querySelectorAll(".caloriesBtn");
const durationItems = document.querySelectorAll(".durationItem");
const programs = document.querySelectorAll(".program");

let currentChosenCalories = document.querySelector("button.chosen");
let currentChosenDuration = document.querySelector("div.chosen");
let currentChosenProgram = document.querySelector(".chosenProgram");
let currentProgramPrice = document.querySelector(".chosenProgram.programPrice");

let price = document.querySelector(".price");

programs.forEach((el) => {
  el.addEventListener("click", () => {
    let lastChosenProgram = document.querySelector(".chosenProgram");
    if (lastChosenProgram) {
      lastChosenProgram.classList.remove("chosenProgram");
    }
    el.classList.add("chosenProgram");
    currentProgramPrice = el.querySelector(".programPrice").textContent;
    updateResult();
  });
});

caloriesBtns.forEach((el) => {
  el.addEventListener("click", () => {
    let lastChosenBtn = document.querySelector("button.chosen");
    if (lastChosenBtn) {
      lastChosenBtn.classList.remove("chosen");
    }
    el.classList.add("chosen");
    updateResult();
  });
});

durationItems.forEach((el) => {
  el.addEventListener("click", () => {
    let lastChosenItem = document.querySelector(".durationItem.chosen");
    if (lastChosenItem) {
      lastChosenItem.classList.remove("chosen");
    }
    el.classList.add("chosen");
    updateResult();
  });
});

let discount = 0;

function updateResult() {
  const programPrice = parseInt(
    document.querySelector(".chosenProgram .programPrice").textContent,
  );
  const calories = parseInt(
    document.querySelector(".caloriesBtn.chosen").textContent,
  );
  const weeks = parseInt(
    document.querySelector(".durationItem.chosen p").textContent[0],
  );
  const dailyPrice = (parseInt(programPrice) * parseInt(calories)) / 1200 / 2;

  document.querySelector(".price").textContent = Math.round(dailyPrice);
  document.querySelector(".goodPrice").textContent =
    Math.round(dailyPrice * 7 * parseInt(weeks) - discount) + " ₽";
  document.querySelector(".badPrice").textContent =
    Math.round(dailyPrice * 7 * 1.3 * parseInt(weeks)) + " ₽";
  let daysCnt = parseInt(weeks) * 7;
  document.querySelector(".daysCnt").textContent = daysCnt;
  document.querySelector(".days").textContent = daysCnt == 21 ? "день" : "дней";
}

const promoBtn = document.querySelector(".promo__btn");
promoBtn.addEventListener("click", () => {
  if (promoBtn.classList.contains("is-active")) {
    promoBtn.classList.remove("is-active");
    discount = 0;
  } else {
    promoBtn.classList.add("is-active");
    discount = 500;
  }
  updateResult();
});

updateResult();

