'use strict';

let guessNumber = Math.trunc(Math.random()*20)+1
document.querySelector('.number').textContent = guessNumber
let score = 20
let highscore = 0

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')

const validateResult = function () {
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess !== guessNumber) {
        if(score > 1){
            document.querySelector('.message').textContent = guess > guessNumber ? 'Number is bit high' : 'Number is bit low'
            score--
            document.querySelector('.score').textContent = score
        }else{
            document.querySelector('.message').textContent = 'You loose'
            score--
            document.querySelector('.score').textContent = 0
        }
    } else if (guess == guessNumber) {
        document.querySelector('.message').textContent = 'Yeaah, you guessed it right'
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if(highscore < score) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }

        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    }

}

document.querySelector('.check').addEventListener('click', validateResult);

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    guessNumber = Math.trunc(Math.random()*20)+1
    document.querySelector('.number').textContent = guessNumber
    document.querySelector('.guess').value = ''
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})


document.addEventListener('keypress', function(e){  
    if(e.key === 'Enter'){
        validateResult()
    }
})