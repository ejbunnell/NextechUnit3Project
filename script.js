let username;
let nameInput = document.querySelector("#nameInput");
let nameInputDiv = document.querySelector("#nameInputDiv");
let optionDiv = document.querySelector("#option");
let question = document.querySelector("#question");
nameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        username = nameInput.value;
        nameInputDiv.style.display = "none";
        question.innerHTML = username + ", are you going to play offense or defense?";
        optionDiv.style.display = "block";
    }
});


let offenseButton = document.querySelector("#offenseButton");
let offense = document.querySelector("#offense");
offenseButton.addEventListener("click", () => {
    optionDiv.style.display = "none";
    offense.style.display = "block";
})

let botShootingVid = document.querySelector("video");
document.addEventListener("keydown", (event) => {
    if (offense.style.display === "block") {
        if (event.key === " ") {
            botShootingVid.play();
            setTimeout(winScreen, 6000);
        }
    }
});

let offenseOne = document.querySelector("#oOne");
let offenseTwo = document.querySelector("#oTwo");
function winScreen() {
    offenseOne.style.display = "none";
    offenseTwo.style.display = "block";
}


let defenseButton = document.querySelector("#defenseButton");
let defense = document.querySelector("#defense");
defenseButton.addEventListener("click", () => {
    optionDiv.style.display = "none";
    defense.style.display = "block";
})

let defenseImg = document.querySelector("#defenseImg");
let defenseOne = document.querySelector("#dOne");
let defenseTwo = document.querySelector("#dTwo");
defenseImg.addEventListener("click", () => {
    defenseOne.style.display = "none";
    defenseTwo.style.display = "block";
})
