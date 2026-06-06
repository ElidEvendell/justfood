const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')
let number = 0
const masImg = ['first', 'second', 'third']
const masPag = ['firstBlock', 'secondBlock', 'thirdBlock']

for (let i = 1; i < masImg.length; i++) {
    document.getElementById(masImg[i]).style.display = 'none';
    document.getElementById(masPag[i]).style.backgroundColor = 'aliceblue';
}

nextBtn.addEventListener('click', () => {
    let lastImg = document.getElementById(masImg[number])
    let lastBlock = document.getElementById(masPag[number])
    if (number< masImg.length - 1) {
        number++
    } else {
        number = 0
    }
    let newImg = document.getElementById(masImg[number])
    let newBlock = document.getElementById(masPag[number]) 
    lastImg.style.display = 'none';
    newImg.style.display = 'block';

    lastBlock.style.backgroundColor = 'aliceblue'
    newBlock.style.backgroundColor = '#FF5900'
})

prevBtn.addEventListener('click', () => {
    let lastImg = document.getElementById(masImg[number])
    let lastBlock = document.getElementById(masPag[number])
    if (number>0) {
        number--
    } else {
        number = masImg.length - 1
    }
    let newImg = document.getElementById(masImg[number])
    let newBlock = document.getElementById(masPag[number]) 
    lastImg.style.display = 'none';
    newImg.style.display = 'block';

    lastBlock.style.backgroundColor = 'aliceblue'
    newBlock.style.backgroundColor = '#FF5900'
})

