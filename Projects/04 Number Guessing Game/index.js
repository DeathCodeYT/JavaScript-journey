let isStart = false;
let prevGuess = [];
let number = null;
let attempts = 0
const guessBtn = document.getElementById("guessButton");
const guessValue = document.getElementById("userGuess");
const message = document.getElementById("message")
const startBtn = document.getElementById("startButton")

function initGame(){
  document.getElementById("guessFrom").addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (!isStart) return;
    guessCheck(guessValue.value);
  });
  startBtn.addEventListener('click',()=>{
    startGame()
  })
  guessBtn.disabled = true
  guessValue.disabled = true

}


function guessCheck(val) {
  if(isNaN(val)){
    message.textContent = "Please enter a valid number between 1 and 100."
    return
  }
  if(val<=0){
    message.textContent = "Please enter a valid number between 1 and 100."
    return
  }
  const guessNumber = parseInt(val)
  attempts++
  if(guessNumber<number){
    message.textContent = "Too Low! Try again"
    prevGuess.push(guessNumber)
    updatePrevGuess()
  }else if(guessNumber>number){
    message.textContent = "Too High! Try again"
    prevGuess.push(guessNumber)
    updatePrevGuess()
  }else{
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`
    prevGuess.push(guessNumber)
    updatePrevGuess()
    endGame()
  }
  if(attempts >=10 && guessNumber !== number){
    message.textContent = `Game over! The correct number was ${number}.`;
    endGame()
  }
  
  
}

function startGame() {
  isStart = true;
  number = Math.round(Math.random() * 100 + 1);
  message.innerText = "Game Started"
  guessBtn.disabled = false
  guessValue.disabled = false
  attempts = 0
  prevGuess = []
  console.log(number)
}

function endGame() {
  isStart = false;
  guessBtn.disabled = true
  guessValue.disabled = true
}

function updatePrevGuess(guess){
  const ul = document.getElementById('guessList')
  ul.innerHTML = ''
  prevGuess.forEach((guess,i)=>{
    const li = document.createElement('li')
    li.textContent = `Guess ${i + 1}: ${guess}`
    ul.appendChild(li)
  })
  
}

initGame()