//Getting elements from the DOM
let compScore = document.querySelector('.comp_score')
let playerScore = document.querySelector('.player_score')
let compPlayer = document.querySelector('.comp_player')
let userPlayer = document.querySelector('.user_player')
let btn = document.querySelectorAll('.btn')
let text = document.querySelector('.status_text')
let con = document.querySelector('.controls');

//declaring variables
let playerChoice
let computerChoice
let cScore = 0
let pScore = 0
let choices = ["rock", "paper", "scissors"]

//getting computer choice by chosing a random option from the choices array
function getComputerChoice() {
  let num = Math.floor(Math.random() * choices.length)
  computerChoice = choices[num]
}

//Getting the player's choice by looping through the option buttons and adding an event listener for a click event
btn.forEach(bn => {
  bn.addEventListener('click', (e) => {
    playerChoice = e.target.getAttribute('name')

    //getting computer choice 
    getComputerChoice()

    compPlayer.innerHTML = '🤜🏽'
    userPlayer.innerHTML = '🤛🏽'

    //calling check winner function and passing player choice and computer choice as arguments
    checkWinner(playerChoice, computerChoice)
  })
})


//checking for winner function
function checkWinner(player, comp) {

  //if player choices rock and computer rock 
  if (player == 'rock' && comp == 'rock') {

    text.textContent = ''
    compPlayer.classList.add('animate');
    userPlayer.classList.add('animate');
    con.classList.add('no-clicking')
    setTimeout(() => {
      compPlayer.classList.remove('animate');
      userPlayer.classList.remove('animate');
      compPlayer.innerHTML = '🤜🏽'
      userPlayer.innerHTML = '🤛🏽'
      text.textContent = 'Its a tie!'
      con.classList.remove('no-clicking')

    }, 2000)

  }

  //if player choices rock and computer paper 
  else if (player == 'rock' && comp == 'paper') {
    text.textContent = ''
    compPlayer.classList.add('animate');
    userPlayer.classList.add('animate');
    con.classList.add('no-clicking')

    setTimeout(() => {
      compPlayer.classList.remove('animate');
      userPlayer.classList.remove('animate');
      compPlayer.innerHTML = '🤚🏽'
      userPlayer.innerHTML = '🤛🏽'
      text.textContent = 'computer wins!'
      cScore++;
      compScore.textContent = cScore;
      con.classList.remove('no-clicking')

    }, 2000)

  }
  //if player choices rock and computer scissors
  else if (player == 'rock' && comp == 'scissors') {
    con.classList.add('no-clicking')

    text.textContent = ''
    compPlayer.classList.add('animate');
    userPlayer.classList.add('animate');

    setTimeout(() => {
      compPlayer.classList.remove('animate');
      userPlayer.classList.remove('animate');
      compPlayer.innerHTML = '✌🏽'
      userPlayer.innerHTML = '🤛🏽'
      text.textContent = 'You win!'
      pScore++;
      playerScore.textContent = pScore;
      con.classList.remove('no-clicking')

    }, 2000)
  }
  //if player choices paper and computer rock 

  else if (player == 'paper' && comp == 'rock') {
    text.textContent = ''
    compPlayer.classList.add('animate');
    userPlayer.classList.add('animate');
    con.classList.add('no-clicking')

    setTimeout(() => {
      compPlayer.classList.remove('animate');
      userPlayer.classList.remove('animate');
      compPlayer.innerHTML = '🤜🏽'
      userPlayer.innerHTML = '🤚🏽'
      text.textContent = 'You win!'
      pScore++;
      playerScore.textContent = pScore;
      con.classList.remove('no-clicking')

    }, 2000)
  }
  //if player choices paper and computer paper

  else if (player == 'paper' && comp == 'paper') {
    text.textContent = ''
    compPlayer.classList.add('animate');
    userPlayer.classList.add('animate');
    con.classList.add('no-clicking')

    setTimeout(() => {
      compPlayer.classList.remove('animate');
      userPlayer.classList.remove('animate');
      compPlayer.innerHTML = '🤚🏽'
      userPlayer.innerHTML = '🤚🏽'
      text.textContent = 'Its a tie!'
      con.classList.remove('no-clicking')

    }, 2000)
  }
  //if player choices paper and computer scissors 

  else if (player == 'paper' && comp == 'scissors') {
    text.textContent = ''
    compPlayer.classList.add('animate');
    userPlayer.classList.add('animate');
    con.classList.add('no-clicking')

    setTimeout(() => {
      compPlayer.classList.remove('animate');
      userPlayer.classList.remove('animate');
      compPlayer.innerHTML = '✌🏽'
      userPlayer.innerHTML = '🤚🏽'
      text.textContent = 'computer wins!'
      cScore++;
      compScore.textContent = cScore;
      con.classList.remove('no-clicking')

    }, 2000)
  }

  //if player choices scissors and computer rock 
  else if (player == 'scissors' && comp == 'rock') {
    text.textContent = ''
    compPlayer.classList.add('animate');
    userPlayer.classList.add('animate');
    con.classList.add('no-clicking')

    setTimeout(() => {
      compPlayer.classList.remove('animate');
      userPlayer.classList.remove('animate');
      compPlayer.innerHTML = '🤜🏽'
      userPlayer.innerHTML = '✌🏽'
      text.textContent = 'computer wins!'
      cScore++;
      compScore.textContent = cScore;
      con.classList.remove('no-clicking')

    }, 2000)
  }
  //if player choices scissors and computer paper 

  else if (player == 'scissors' && comp == 'paper') {
    text.textContent = ''
    compPlayer.classList.add('animate');
    userPlayer.classList.add('animate');
    con.classList.add('no-clicking')

    setTimeout(() => {
      compPlayer.classList.remove('animate');
      userPlayer.classList.remove('animate');
      compPlayer.innerHTML = '🤚🏽'
      userPlayer.innerHTML = '✌🏽'
      text.textContent = 'You win!'
      pScore++;
      playerScore.textContent = pScore;
      con.classList.remove('no-clicking')

    }, 2000)
  }
  //if player choices scissors and computer scissors

  else if (player == 'scissors' && comp == 'scissors') {
    text.textContent = ''
    compPlayer.classList.add('animate');
    userPlayer.classList.add('animate');
    con.classList.add('no-clicking')

    setTimeout(() => {
      compPlayer.classList.remove('animate');
      userPlayer.classList.remove('animate');
      compPlayer.innerHTML = '✌🏽'
      userPlayer.innerHTML = '✌🏽'
      text.textContent = 'Its a tie!'
      con.classList.remove('no-clicking')

    }, 2000)
  }
}

/*----written by simon Makau----*/