document.addEventListener("DOMContentLoaded", function () {             //add event listner waits until someonething happens (dom content loaded, refresh page in browser) then funcion begins 
    const wordList = ["apple", "lemon", "mango", "grape", "melon", "peach", "guava", "berry"];   //create a array of words (specific topic) so that when someone guess you have//  
    const secretWord = getRandomWord(wordList);                         //getrandom gets a random variable in your list/array of words(secretword will be used in a fuction later on)//
    let attempts = 6;

    const wordDisplay = document.getElementById("word-display");     //displays the word when someones uses a guess//
    const guessInput = document.getElementById("guess-input");       //keeps track of the inputs made from the users guesses// 
    const guessButton = document.getElementById("guess-button");     //guess button the button shown in html//
    const attemptCount = document.getElementById("attempt-count");   //keeps track of all attempts(6)//
    const message = document.getElementById("message");              //the message that appears after you lose or win the gaame//
    
    let Userguess = 1
    let currentRow = document.getElementById(`row${Userguess}`)
    let letters = currentRow.children;
    
    for (let i = 0; i < word.length; i++) 
    letters[i].textContent = word[i];
    

    let guessedWord = "".repeat(secretWord.length);    //"guessword" the random word that the users uses to guess in the game// 
    wordDisplay.textContent = guessedWord;             //displays the word in html format used in conjuction with code above//


    guessButton.addEventListener("click", function () {   //waits until the button is click to start the function//
        const guess = guessInput.value.toLowerCase();     //makes all guess  lowercase to make everything easier//
        

        if (guess.length !== 5) {
            message.textContent = "Please enter a 5-letter word.";      //if guess is not a 5 letter wordreturn this messages??
            return;
        }

        if (guess === secretWord) {
            message.textContent = "Congratulations! You guessed the word!";         //I value and data types are the sames(corret length and word) return message and disable the button//
            guessButton.disabled = true;
        } else {
            attempts--;                                              // Move the attempts subtraction here
            attemptCount.textContent = attempts;                                    
            if (attempts === 0) {
                message.textContent = "Out of attempts. The word was " + secretWord + ".";
                guessButton.disabled = true;
            } else {
                message.textContent = "Try again.";                     //If all the previous code don't apply, then you get this message  
            }
        }
    })

    function getRandomWord(wordList) {                                       //math related fromula math random will choose a decimal ranging between 0 and 1, 
        const randomIndex = Math.floor(Math.random() * wordList.length);     //(ex 0.5) then multiplly that with the amount of words you have in your array
        return wordList[randomIndex];                                        //math floor will change that sum into a whole number, that new number will be the word chosen
    }
});   




