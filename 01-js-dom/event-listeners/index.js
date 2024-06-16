//Event listener
const btnTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert("Fire 🔥");
}

btnTwo.addEventListener("click", alertBtn);

//Mouseover
const newBGColor = document.querySelector('.box-3');

function changeBGColor() {
    newBGColor.style.backgroundColor = "red";
}

newBGColor.addEventListener("mouseover", changeBGColor);