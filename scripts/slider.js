const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let number = 0;
const masImg = ["firstImg", "secondImg", "thirdImg"];
const masPag = ["firstBlock", "secondBlock", "thirdBlock"];

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

    lastBlock.style.width = "16px";
    lastBlock.style.height = "16px";
    newBlock.style.width = "24px";
    newBlock.style.height = "24px";
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

    lastBlock.style.width = "16px";
    lastBlock.style.height = "16px";
    newBlock.style.width = "24px";
    newBlock.style.height = "24px";
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

        lastBlock.style.width = "16px";
        lastBlock.style.height = "16px";
        newBlock.style.width = "24px";
        newBlock.style.height = "24px";
        console.log(1)}, 3000)
  }),
);
