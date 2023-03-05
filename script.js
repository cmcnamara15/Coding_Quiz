// variables 
var timer 
var highScores
var question
var playerName

var playerScore = 0;
var questionIndex = 0;
var choicesIndex = 0;
var secondsLeft = 75;

var bodyEl =$('#body')
bodyEl.css({'background': 'pink', 'margin': '50px'})
var headerEl =$('#header');
headerEl.css({'background': 'lightblue'})
var titleEl =$('<h1>');
titleEl.text('Welcome To The Code Quiz!'); 
titleEl.addClass('p-2');
titleEl.css({'text-align': 'center', 'border': 'dotted'});
headerEl.append(titleEl);

var containerEl =$('#container')
var startbtnEl = $('#startGamebtn')
startbtnEl.text("Click To Start The Game!")
startbtnEl.css({'font-size': '35px', 'color': 'blue', 'background': 'lightblue'})
containerEl.append(startbtnEl);
containerEl.css({'text-align': 'center'});



var questions =[{
    question: "Question1", 
    choices: ["choice1", "choice2", "choice3", "choice4"],
    rightAnswer: "choice2",
}, {
    question: "Question2",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    rightAnswer: "choice4",
}, {
    question: "Question3",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    rightAnswer: "choice3",
}, {
    question: "Question4",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    rightAnswer: "choice1",
}];

var questionsEl =$('#questions');
var questionEl =$('#questionTitle');
var choice1El =$('#choice1');
var choice2El =$('#choice2');
var choice3El =$('#choice3');
var choice4El =$('#choice4');

function checkQuestion() {
    userChoice = questions[questionIndex].choices[choicesIndex];
    console.log(userChoice)
    console.log(questions[questionIndex].rightAnswer)
    if(userChoice = questions[questionIndex].rightAnswer){
    console.log('right')
    playerScore = playerScore + 25;
    
    }else{
    console.log('wrong')
    playerScore = playerScore + 0;
    }
    console.log(playerScore)
    

};

    



function showQuestion() {
    questionEl.text(questions[questionIndex].question);
    choice1El.text(questions[questionIndex].choices[0]);
    choice2El.text(questions[questionIndex].choices[1]);
    choice3El.text(questions[questionIndex].choices[2]);
    choice4El.text(questions[questionIndex].choices[3]);
}
    choice1El.on("click", function(){
        checkQuestion();
        questionIndex++;
        showQuestion();
    });
    choice2El.on("click", function(){
        checkQuestion();
        questionIndex++;
        showQuestion();
    });
    choice3El.on("click", function(){
        checkQuestion();
        questionIndex++;
        showQuestion();
    });
    choice4El.on("click", function(){
        questionIndex;
        showQuestion();
    })

var finalScoreEl =$('#finalScore')
var enterInitialsEl =$('#enterInitials')
var submitScoreEl =$('#submitScore')

submitScoreEl.css({'color': 'blue', 'background': 'lightblue'})

var highScoresEl =$('#highScores');
highScoresEl.css({'align': 'right'});
highScoresEl.css({'font-size': '15px', 'color': 'blue', 'background': 'lightblue', })
highScoresEl.on("click", function(){
    containerEl.hide()
    questionsEl.hide()
})

questionsEl.hide();
var timerEl = document.querySelector("#timer");
//  console.log(timerEl)
// ^ concole.logged to make sure timer was working

 
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds remaining!";
        console.log(secondsLeft);
        //  WRITE CODE TO DECREMENT TIME IF USER CHOOSES WRONG QUESTION
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
 }

 
var choicesEl=$('#choices');
// var answersEl =$("#answerButtons");
// answersEl.hide();

 startbtnEl.on("click", function(){
    containerEl.hide();
    questionsEl.show();
    questionEl.css({'text-align': 'center'});
    choicesEl.css({'text-align': 'center-left','font-size': '15px', 
    'color': 'blue', 'background': 'lightblue', 'padding': '20px', 
    'border': 'dotted'
});
    choice1El.css({'margin': '5px'});
    choice2El.css({'margin': '5px'});
    choice3El.css({'margin': '5px'});
    choice4El.css({'margin': '5px'}),
    showQuestion();
    setTime();
    // console.log(secondsLeft);
    // setTimeout(function(){
    //  alert('Time is up!');
    // }, 75000); 
    });

 



// Create html elements for the timer and the start button
// Variables to keep track of
// Current time (stopped or live)
// High Scores
// Name
// Score (number)
// Questions (array)
// Each Question (dictionary)
// Question text (string)
// Answers [String array]
// Correct answer number (represents correct answer in the array)
// Bind event to starts game
// Starting a game does the following (create function called askQuestion)
// Starts the timer (however that works)
// Draws a question on the page


// var timerEl=$('#timer')
// $(document).ready(function(){
// function setTime() 
//     var timerInterval = setInterval(function() {
//         $(timerEl).text(secondsLeft--);
//         if (secondsLeft == 0) {
//             clearInterval(timerInterval);
//         }
//     },1000);
// })