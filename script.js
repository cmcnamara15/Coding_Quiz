// variables 
var timer 
var highscores;
var question;
var playerName;
var playerScore;
var starttime = 75;

var questionIndex = 0;

var questions =[{
    question: "question1", 
    choices: ["choice1", "choice2", "choice3", "choice4"],
    rightAnswer: "choice2",
}, {
    question: "question2",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    rightAnswer: "choice4",
}, {
    question: "question3",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    rightAnswer: "choice3",
}, {
    question: "question4",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    rightAnswer: "choice1",
}];


var bodyEl =$('#body')
bodyEl.css({'background': 'pink', 'margin': '50px'})
var headerEl =$('#header');
headerEl.css({'background': 'lightblue'})
var titleEl =$('<h1>');
titleEl.text('Welcome To The Code Quiz!'); 
titleEl.addClass('p-5');
titleEl.css({'text-align': 'center', 'border': 'dotted'});
headerEl.append(titleEl);
 

var containerEl =$('#container')
var startbtnEl = $('#startGamebtn')
startbtnEl.text("Click To Start The Game!")
startbtnEl.css({'font-size': '35px', 'color': 'blue', 'background': 'lightblue'})
containerEl.append(startbtnEl);

var questionsEl =$('#questions');
var questionEl =$('#questionTitle');
var choice1El =$('#choice1');
var choice2El =$('#choice2');
var choice3El =$('#choice3');
var choice4El =$('#choice4');

function showQuestion() {
    questionEl.text(questions[questionIndex].question);
    choice1El.text(questions[questionIndex].choices[0]);
    choice2El.text(questions[questionIndex].choices[1]);
    choice3El.text(questions[questionIndex].choices[2]);
    choice4El.text(questions[questionIndex].choices[3]);
    choice1El.on("click", function(){
        questionIndex++;
        showQuestion();
    });
    choice2El.on("click", function(){
        questionIndex++;
        showQuestion();
    });
    choice3El.on("click", function(){
        questionIndex++;
        showQuestion();
    });
    choice4El.on("click", function(){
        questionIndex;
        showQuestion();
    })
    
}


startbtnEl.on("click", function(){
   containerEl.hide();
   showQuestion();
   setTimeout(function(){
    alert('Time is up!');
   }, 75000);
   });

var timerEl=$('time')


function setTime() {
    var timerInterval = setInterval(function() {
      starttime--;
      timeEl.textContent = starttime + "seconds left.";
  
      if(starttime === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
  


 
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

