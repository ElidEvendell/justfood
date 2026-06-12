const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let number = 0;
const masImg = ["firstImg", "secondImg", "thirdImg"];
const masPag = ["firstBlock", "secondBlock", "thirdBlock"];
const masTitle = ["Программа FIT, ужин", "Программа FIT, завтрак", "Программа FIT, обед"];
const masInfo = ["Индейка в сладком чили запечённая, гречка отварная, печёный помидор", "Овсяноблин с творожным сыром и ягодным топпингом", "Куриное филе с томатным салатом и бурым рисом"];
const dishTitle = document.getElementById('dishTitle')
const dishInfo = document.getElementById('dishInfo')

const nextImgChange = () => {
    let lastImg = document.getElementById(masImg[number]);
    let lastBlock = document.getElementById(masPag[number]);
    number<2 ? number++ : number = 0;
    newImg = document.getElementById(masImg[number]);
    newBlock = document.getElementById(masPag[number]);
    lastImg.style.display = "none";
    newImg.style.display = "block";

    lastBlock.style.backgroundColor = "aliceblue";
    newBlock.style.backgroundColor = "#FF5900";

    lastBlock.style.width = "8px";
    lastBlock.style.height = "8px";
    newBlock.style.width = "15px";
    newBlock.style.height = "15px";
    dishTitle.textContent = masTitle[number];
    dishInfo.textContent = masInfo[number];
}



for (let i = 1; i < masImg.length; i++) {
  document.getElementById(masImg[i]).style.display = "none";
  document.getElementById(masPag[i]).style.backgroundColor = "aliceblue";
}

intervalId = setInterval(() => {
        nextImgChange();}, 3000)

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

    lastBlock.style.backgroundColor = "aliceblue";
    newBlock.style.backgroundColor = "#FF5900";

    lastBlock.style.width = "8px";
    lastBlock.style.height = "8px";
    newBlock.style.width = "15px";
    newBlock.style.height = "15px";
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

        lastBlock.style.backgroundColor = "aliceblue";
        newBlock.style.backgroundColor = "#FF5900";

        lastBlock.style.width = "8px";
        lastBlock.style.height = "8px";
        newBlock.style.width = "15px";
        newBlock.style.height = "15px";
        console.log(1)}, 3000)
  }),
);
