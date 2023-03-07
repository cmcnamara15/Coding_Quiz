// variables 
// there is a lot i need to work on with this page. Specifically I need to fix the bugs at the end of the game
// I spent a lot of time getting to this end point and will re submit this project, cleaned up and de bugged when 
// I have time. With that being said I am very proud of how far i came on this and how much I learned.
var timer 
var highScores
var question
var playerName

var playerScore = 0;
var questionIndex = 0;
var choicesIndex = 0;
var secondsLeft = 75;
var timerId = null;

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
startbtnEl.css({'font-size': '35px', 'color': 'blue', 'background': 'lightblue', 'border': 'dotted'})
containerEl.append(startbtnEl);
containerEl.css({'text-align': 'center'});



var questions =[{
    question: "What data type returns a value of true/false?", 
    choices: ["string", "boolean", "number", "object"],
    rightAnswer: 1,
}, {
    question: "A  variable name cannot start with a?",
    choices: ["dollar sign", "capital letter", "number", "dash"],
    rightAnswer: 2,
}, {
    question: "Whenever a method requires some information to work, the data is given inside the parentheses is called",
    choices: ["objects", "method operators", "data types", "parameters"],
    rightAnswer: 3,
}, {
    question: "Which of the following is not included in the family of data types?",
    choices: ["variable", "numeric", "boolean", "string"],
    rightAnswer: 0,
}];

var questionsEl =$('#questions');
var questionEl =$('#questionTitle');
var choice1El =$('#choice1');
var choice2El =$('#choice2');
var choice3El =$('#choice3');
var choice4El =$('#choice4');

var correctEl =$('#correct')

function checkQuestion(userChoice) {


    if(userChoice === questions[questionIndex].rightAnswer){
        console.log('right')
        correctEl.text('right')
    // }else if(userChoice === questionIndex[3]){

    
    }else{
        console.log('wrong')
        correctEl.text('wrong')
        secondsLeft -= 15
    }
   
};

var h5El= $('h5')

function endGame() {
    questionEl.hide();
    questionsEl.hide();
    titleEl.hide();
    console.log('end game');
    clearInterval(timerId);
    console.log(secondsLeft);
    h5El.hide();
    initialsEl.show();
    submitScoreEl.show();
    initialsEl.css({'margin-left': '400px'})
    allDoneEl.text("Your finale score is " + secondsLeft + "! Please enter your initials")
    allDoneEl.css({'margin-left': '400px', 'padding': '50px'})
    submitScoreEl.on('click', function(){
        var initials = $("input[type='text']").val();
        localStorage.setItem('Initials', initials);
        localStorage.setItem('score',(secondsLeft));
        localStorage.getItem(initials);
        localStorage.getItem(secondsLeft);
        highScorePage.append(initials);
        highScorePage.append(secondsLeft);


     })
}

function showQuestion() {
    questionEl.text(questions[questionIndex].question);
    choice1El.text(questions[questionIndex].choices[0]);
    choice2El.text(questions[questionIndex].choices[1]);
    choice3El.text(questions[questionIndex].choices[2]);
    choice4El.text(questions[questionIndex].choices[3]);
}
    choice1El.on("click", function(){
        checkQuestion(0);
        questionIndex++;
        if(questionIndex < questions.length){
            showQuestion();
        }else{
            endGame();
        }

    });
    choice2El.on("click", function(){
        checkQuestion(1);
        questionIndex++;
        if(questionIndex < questions.length){
        showQuestion();
        }else{
            endGame();
        }
    });
    choice3El.on("click", function(){
        checkQuestion(2);
        questionIndex++;
        if(questionIndex < questions.length){
        showQuestion();
        }else{
            endGame();
        }
    });
    choice4El.on("click", function(){
        checkQuestion(3);
        questionIndex++;
        if(questionIndex < questions.length){
        showQuestion();
        }else{
            endGame();
        }
    })

var allDoneEl =$('#allDone')
var finalScoreEl =$('#finalScore')
var initialsEl =$('#initials')
var submitScoreEl =$('#submitScore')
finalScoreEl.hide();
initialsEl.hide();
submitScoreEl.hide();
submitScoreEl.css({'color': 'blue', 'background': 'lightblue'})


var highScorePage =$('#highScorePage')
var returnToStartEl =$('#returnToStart')

returnToStartEl.hide();

var highScoresEl =$('#highScores');
highScoresEl.css({'align': 'right'});
highScoresEl.css({'font-size': '15px', 'color': 'blue', 'background': 'lightblue', })
highScoresEl.on("click", function(){
    containerEl.hide()
    questionsEl.hide()
    finalScoreEl.hide();
    initialsEl.hide();
    submitScoreEl.hide();
    h5El.hide();
    allDoneEl.hide();
    returnToStartEl.show();
    returnToStartEl.css({'font-size': '15px', 'color': 'blue', 'background': 'lightblue', });
    returnToStartEl.on('click', function(){
        containerEl.show()
    })
    
    

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
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    return timerInterval
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
    timerId = setTime();
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
