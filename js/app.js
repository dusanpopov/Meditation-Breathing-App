const circleProgressEl = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const startBtn = document.querySelector(".btn-start");
const instructionsEl = document.querySelector(".instructions");
const breathsEl = document.querySelector(".breaths__remaining");
let breathsLeft = 3;

numberOfBreaths.addEventListener("change", () => {
    breathsLeft = numberOfBreaths.value;
    breathsEl.textContent = breathsLeft;
});
// Grow/shrink circle
const growCircle = () => {
    circleProgressEl.classList.add("circle-grow");
    setTimeout(() => {
        circleProgressEl.classList.remove("circle-grow");
    }, 8000);
}
// Update instructions elements
const instructionsElementUpdate = () => {
    setTimeout(() => {
        instructionsEl.textContent = "Hold breath";
        setTimeout(() => {
            instructionsEl.textContent = "Exhale breath slowly"
        }, 4000)
    }, 4000);
}

const breathTextUpdate = () => {
    breathsLeft -= 1;
    breathsEl.textContent = breathsLeft;
    instructionsEl.textContent = "Breath in";
    instructionsElementUpdate();
}
// Animation / element update function
const breathingAnimationFunction = () => {
    let breathingAnimation = setInterval(() => {
        if(breathsLeft === 0){
            clearInterval(breathingAnimation);
            instructionsEl.textContent = "Session completed!";
            startBtn.classList.remove("button-inactive");
            breathsLeft = numberOfBreaths.value;
            breathsEl.textContent = breathsLeft;
            return;
        }
        growCircle();
        breathTextUpdate();
    }, 12000);
}

// Begin breathing function
const beginBreathing = () => {
    setTimeout(() => {
        instructionsEl.textContent = "Breathing is about to begin";
        setTimeout(() => {
            growCircle();
            breathTextUpdate();
            breathingAnimationFunction();
        }, 2000);
    }, 2000);
}

startBtn.addEventListener("click", () => {
    startBtn.classList.add("button-inactive");
    instructionsEl.textContent = "Get relaxed, prepare to begin breathing";
    beginBreathing();
});
