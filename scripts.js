// var questions = 3;
// var questionsLeft = ' [' + questions + ' questions left]';
// var noun = prompt("Enter a noun" + questionsLeft);
// questions = questions - 1;
// var questionsLeft = ' [' + questions + ' questions left]';
// var verb = prompt("Enter a verb" + questionsLeft);
// questions -= 1;
// var questionsLeft = ' [' + questions + ' questions left]';
// var adjective = prompt("Enter an adjective" + questionsLeft);
// questions -= 1;
// var questionsLeft = ' [' + questions + ' questions left]';
// alert("You're finished! Enjoy the story")
// var story = "There once was a " + noun + " who ate a " + adjective + " chicken.";
// document.write("<h1>Mad-libs Story</h1>");
// document.write(story);


// var correctAnswer = 0;
// var questionOne = prompt("What day is it today?");
// if (questionOne === "Sunday") {
//     correctAnswer += 1;
// }
// var questionTwo = prompt("What month is it?");
// if(questionTwo === "November") {
//     correctAnswer += 1;
// }
// var questionThree = prompt("What is my name?");
// if(questionThree === "Ebonne") {
//     correctAnswer += 1;
// }

// document.write("<p>You got " + correctAnswer + " out of 3 questions correct.</p>" )

// if (correctAnswer === 3) {
//     document.write("<p>You get a gold crown!</p>")
// } else if (correctAnswer === 2) {
//     document.write("<p>You get a silver crown!</p>")
// } else if (correctAnswer === 1) {
//     document.write("You get a bronze crown!")
// } else {
//     document.write("You lose try again!")
// }
function randoNum(upper, lowegr){
    var randomNumber = Math.floor(Math.random() * (upper -lower + 1) + lower);
    return randomNumber;
}
function numCheck(upper, lower){
    if(isNaN(upper) || isNaN(lower)){
        throw new Error("error message");
    }
}
alert(randoNum(10, 1));
console.log(numCheck(3, 'dog'));

// var correctGuess = false;
// var randomNumber = Math.floor(Math.random() * 6 + 1);
// var guess = prompt("I am thinking of a random number between 1 and 6. Can you guess what it is?");
// if (parseInt(guess) === randomNumber) {
//     correctGuess = true;
// } else if (parseInt(guess) < randomNumber) {
//     var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
//     if (parseInt(guessMore) === randomNumber) {
//         correctGuess = true;
//     }
// } else if (parseInt(guess) > randomNumber) {
//     var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
//     if (parseInt(guessLess) === randomNumber) {
//         correctGuess = true;
//     }
// }

// if (correctGuess) {
//     document.write('<p>You guessed the number!</p>')
// } else {
//     document.write('<p>Sorry the number was ' + randomNumber + '.</p>')
// }


