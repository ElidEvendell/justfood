const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let number = 0;
const masImg = ["firstImg", "secondImg", "thirdImg"];
const masPag = ["firstBlock", "secondBlock", "thirdBlock"];
const masTitle = ["Программа FIT, ужин", "Программа FIT, завтрак", "Программа FIT, обед"];
const masInfo = ["Индейка в сладком чили запечённая, гречка отварная, печёный помидор", "Овсяноблин с творожным сыром и ягодным топпингом", "Куриное филе с томатным салатом и бурым рисом"];
const dishTitle = document.getElementById('dishTitle')
const dishInfo = document.getElementById('dishInfo')

const slideChange = () => {
    let lastImg = document.getElementById(masImg[number]);
    let lastBlock = document.getElementById(masPag[number]);
    number<2 ? number++ : number = 0;
    let newImg = document.getElementById(masImg[number]);
    let newBlock = document.getElementById(masPag[number]);
    lastImg.style.display = "none";
    newImg.style.display = "block";

    lastBlock.querySelector('img').src = 'img/Ellipse 3.2.svg';
    newBlock.querySelector('img').src = 'img/Group 64.svg';
    dishTitle.textContent = masTitle[number];
    dishInfo.textContent = masInfo[number];
}

let intervalId = setInterval(() => {
        slideChange();}, 3000)

document.querySelectorAll(".block").forEach((el) =>
  el.addEventListener("click", () => {
    clearInterval(intervalId)
    console.log(1);
    let lastImg = document.getElementById(masImg[number]);
    let lastBlock = document.getElementById(masPag[number]);
    switch (el.id) {
      case "firstBlock":
        number = 0;
        break;
      case "secondBlock":
        number = 1;
        break;
      case "thirdBlock":
        number = 2;
        break;
    }

    let newImg = document.getElementById(masImg[number]);
    let newBlock = document.getElementById(masPag[number]);
    lastImg.style.display = "none";
    newImg.style.display = "block";

    lastBlock.querySelector('img').src = 'img/Ellipse 3.2.svg';
    newBlock.querySelector('img').src = 'img/Group 64.svg';

    dishTitle.textContent = masTitle[number];
    dishInfo.textContent = masInfo[number];
    
    intervalId = setInterval(() => {
        let lastImg = document.getElementById(masImg[number]);
        let lastBlock = document.getElementById(masPag[number]);
        number<2 ? number++ : number = 0;
        newImg = document.getElementById(masImg[number]);
        newBlock = document.getElementById(masPag[number]);
        lastImg.style.display = "none";
        newImg.style.display = "block";

        lastBlock.querySelector('img').src = 'img/Ellipse 3.2.svg';
        newBlock.querySelector('img').src = 'img/Group 64.svg';
        
        dishTitle.textContent = masTitle[number];
        dishInfo.textContent = masInfo[number];
        }, 3000)
  }),
);

document.querySelectorAll(".block").forEach(el => {
  el.addEventListener("mouseenter", () => clearInterval(intervalId));
  el.addEventListener("mouseleave", () => {clearInterval(intervalId); intervalId = setInterval(() => {slideChange();}, 3000)})
})
