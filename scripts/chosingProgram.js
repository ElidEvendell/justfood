const caloriesBtns = document.querySelectorAll(".caloriesBtn");
const durationItems = document.querySelectorAll(".durationItem");
const programs = document.querySelectorAll(".program");

let currentChosenCalories = document.querySelector("button.chosen");
let currentChosenDuration = document.querySelector("div.chosen>.weeks").textContent;
let currentChosenProgram = document.querySelector(".chosenProgram h4").textContent;
let currentProgramPrice = document.querySelector(".chosenProgram.programPrice");

let price = document.querySelector(".price");

programs.forEach((el) => {
  el.addEventListener("click", () => {
    let lastChosenProgram = document.querySelector(".chosenProgram");
    if (lastChosenProgram) {
      lastChosenProgram.classList.remove("chosenProgram");
    }
    el.classList.add("chosenProgram");
    currentChosenProgram = el.querySelector('h4').textContent;
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

let discount = 0.95;

durationItems.forEach((el) => {
  el.addEventListener("click", () => {
    let lastChosenItem = document.querySelector(".durationItem.chosen");
    if (lastChosenItem) {
      lastChosenItem.classList.remove("chosen");
    }
    el.classList.add("chosen");
    discount = (100-parseInt(el.querySelector('.discount').textContent.length ? el.querySelector('.discount').textContent.slice(2, el.querySelector('.discount').textContent.length - 1) : 0))/100;
    currentChosenDuration = el.querySelector('.weeks').textContent;
    updateResult();
  });
});

let promoDiscount = 0;

const menuUrls = {
  'SPORT': ['img/box1.png', 'img/box2.png', 'img/box3.png', 'img/box4.png', 'img/box5.png', 'img/box4.png', 'img/box3.png'],
  'FIT': ['img/box5.png', 'img/box4.png', 'img/box3.png', 'img/box2.png', 'img/box1.png', 'img/box2.png', 'img/box5.png'],
  'LIFE': ['img/box3.png', 'img/box1.png', 'img/box4.png', 'img/box2.png', 'img/box5.png', 'img/box3.png', 'img/box2.png']
}

const dishes = document.querySelectorAll('.dishes');

function updateResult() {
  const daysPerWeek = (currentChosenProgram === "SPORT" ? 6 : 7);

  const programPrice = parseInt(
    document.querySelector(".chosenProgram .programPrice").textContent,
  );
  const calories = parseInt(
    document.querySelector(".caloriesBtn.chosen").textContent,
  );
  const weeks = parseInt(
    document.querySelector(".durationItem.chosen p").textContent[0],
  );
  const dailyPrice = (parseInt(programPrice)/daysPerWeek * parseInt(calories)) / 1200;

  document.querySelector(".price").textContent = Math.round(dailyPrice);
  document.querySelector(".goodPrice").textContent =
    Math.round(dailyPrice * 7 * parseInt(weeks)*discount-promoDiscount) + " ₽";
  document.querySelector(".badPrice").textContent =
    Math.round(dailyPrice * 7 * 1.3 * parseInt(weeks)) + " ₽";
  let daysCnt = parseInt(weeks) * 7;
  document.querySelector(".daysCnt").textContent = daysCnt;
  document.querySelector(".days").textContent = daysCnt == 21 ? "день" : "дней";
  document.querySelector('.result__name').textContent = `${currentChosenProgram}, ${currentChosenDuration}`;
  for (let i=0; i<7; i++) {
    dishes[i].src = menuUrls[currentChosenProgram][i];
  }
}

const promoBtn = document.querySelector(".promo__btn");
promoBtn.addEventListener("click", () => {
  if (promoBtn.classList.contains("is-active")) {
    promoBtn.classList.remove("is-active");
    promoDiscount = 0;
  } else {
    promoBtn.classList.add("is-active");
    promoDiscount = 500;
  }
  updateResult();
});



updateResult();
