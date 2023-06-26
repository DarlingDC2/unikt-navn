// start screen with a button to begin and button to view hs
var startScreen = document.querySelector ("#js-start-screen")
var startButton = document.querySelector ("#js-start-button")
startButton.addEventListener("click", function() {
    startScreen.style.visibility = "hidden";
    quizScreen.style.visibility =  "visible";
})

var quizScreen = document.querySelector ("#js-quiz-screen")
quizScreen.style.visibility =  "hidden";
var questionText = document.querySelector ("#js-question-text")
var questionChoices = document.querySelector ("#js-choices")
questionChoices.addEventListener("click", function(){
    console.log("answer")
 })




var questionText = document.querySelector ("#js-question-text")


// when start button is pressed question 1 appears with four buttons 
// 3 out of 4 buttons will return false
// 1 will return true
// timer begins when start button is pressed with 90 seconds countdown
// if button pressed is false remove 15 seconds
// when answer pressed bring next question with same rules
// repeat with 5 questions  
// end of 5 questions stop timer/ remove timer element
// record time as score
// show score and include prompt to enter initials
// when initials entered move to highscore screen
// remove view highscores button and timer on hs screen
// save initials and score(time) to local 
// order initials by highest score to lowest

