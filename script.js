//Home page.
function openlevel() {
    document.getElementById('level-container').style.display = "flex"
}

function closelevel() {
    document.getElementById('level-container').style.display = "none"
}

const word = document.getElementById("word");
const text = document.getElementById("text");
const scores = document.getElementById("score");
const times = document.getElementById("time");
const endgame = document.getElementById("end-game-container");
// const levelSelect = document.getElementById("levels");
// const hard = document.getElementById("hard")
// const easy = document.getElementById("easy")

const words = [
    "wonderful",
    "God bless you my boy",
    "higgledypiggledy",
    "airplane",
    "ball",
    "pls be my val",
    "juice",
    "javascript",
    "woman",
    "i love you",
    "dependent",
    "steer",
    "silver",
    "post traumatic stress disorder",
    "superficial",
    "excuse",
    "seven",
    "pocket",
    "psychologist",
    "international",
    "loving",
  ];

let randomWord;

let score = 0;

let time = 10;


text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

function updateScore() {
    score++;
    scores.innerHTML = score;
  }

// Update time
function updateTime() {
    time--;
    times.innerHTML = time + "s";
  
    if (time === 0) {
      clearInterval(timeInterval);
      // end game
      gameOver();
    }
  }
  
  
  // Game over, show end screen
function gameOver() {
    endgame.innerHTML = `
      <h1>Your time ran out</h1>
      <p>Your final score is ${score}</p>
      <button onclick="location.reload()">Reload</button>
    `;
  
    endgame.style.display = "flex";
  }

  
addWordToDOM();

// Event listeners

// Typing
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

// Clear text
    e.target.value = "";

    if (hard === "hard") {
      time += 2;
    } else if (easy === "easy") {
      time += 4;
    } else {
      time += 6;
    }

    updateTime();
  }
});

