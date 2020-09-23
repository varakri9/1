const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const user_select =document.getElementById('user_select');
const computer_select =document.getElementById('computer_select');
const winner = document.getElementById('winner')
//
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('open');


const choices =['paper','rock','scissors'];

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();
    });
});

reset.addEventListener('click',() =>{
    // show/hide
    main.style.display='flex';
    selection.style.display='none';
});

openBtn.addEventListener('click',() => {
    modal.style.display = 'flex';
});
closeBtn.addEventListener('click',() => {
    modal.style.display = 'none';
});

function checkWinner() {
    const computerChoice = pickRandomChoice();

    updateSelection(user_select, user_select);
    updateSelection(computer_select, computer_select);

    if(userChoice === computerChoice) {
        //draw
        winner.innerText = 'Draw';
    } else if(
        
        (userChoice === 'paper' && computerChoice === 'rock' ) ||
        (userChoice === 'rock' && computerChoice === 'scissors' ) ||
        (userChoice === 'scissors' && computerChoice === 'paper' ) 
    ) {
        //user won
        updateScore(1);
        winner.innerText ='Win';
    } else {
        //user lost
        updateScore(-1);
        winner.innerText ='Lost';
    }
    main.style.display='none';
    selection.style.display='flex';
}

function updateScore(value) {
    score += value;
    scoreEl.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice){
    //class reset
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-scissors');
    selectionEl.classList.remove('btn-rock');
    //
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add('btn-${choice}')
    img.src = `/buttons/icon-${choice}.svg`;
    img.alt = choice;
}