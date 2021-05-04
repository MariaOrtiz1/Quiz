
import { checkAsYes } from './utils.js';
import { checkAsNo } from './utils.js'; 

const quizButton = document.getElementById('test-button');
const quizResults = document.getElementById('user-results');



quizButton.addEventListener('click', () => {

    alert('Hello there! Ready to test your knowledge?');

    const wantsQuiz = confirm('Let us get started!');
        if (wantsQuiz === false) {
            return;
        }

    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');

    let userScore = 0;

    const firstQuestion = prompt('Is it important how the flowers are presented?')
        if (checkAsYes(firstQuestion)) {
            userScore++;
        }
    
    const secondQuestion = prompt(' Were flowers used to deliver messages that could not be spoken aloud?');
        if (checkAsYes(secondQuestion)) {
            userScore++;
        }

    const thirdQuestion = prompt('Does the orange blossom mean "I love you"?');
        if (checkAsNo(thirdQuestion)) {
            userScore++;
        }
    

    quizResults.textContent = `Congratulations ${firstName} ${lastName}! Your score was ${userScore} out of 3!`


});