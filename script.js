/*var timer 
var highScores
var question
var playerName*/

var playerScore = 0;
var questionIndex = 0;
var choicesIndex = 0;
var secondsLeft = 75;
var timerId = null;

// Using JQuery I added style and created elements on the page
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


// Using a object model I created the logic for the questions.
var questions =[{
    question: "What data type returns a value of true/false?", 
    choices: ["String", "Boolean", "Number", "Object"],
    rightAnswer: 1,
}, {
    question: "A  variable name cannot start with a ____.",
    choices: ["Dollar Sign", "Capital Letter", "Number", "Dash"],
    rightAnswer: 2,
}, {
    question: "When a method requires some information to work, the data given inside the parentheses is called ____.",
    choices: ["Objects", "Method Operators", "Data Types", "Parameters"],
    rightAnswer: 3,
}, {
    question: "Which of the following is not included in the family of data types?",
    choices: ["Variable", "Numeric", "Boolean", "String"],
    rightAnswer: 0,
}];

// Used JQuery to select elements on my HTML page 
var questionsEl =$('#questions');
var questionEl =$('#questionTitle');
var choice1El =$('#choice1');
var choice2El =$('#choice2');
var choice3El =$('#choice3');
var choice4El =$('#choice4');

var correctEl =$('#correct')

// This is the function that checks to make sure the user chooses the right question
function checkQuestion(userChoice) {
    if(userChoice === questions[questionIndex].rightAnswer){
        console.log('Right!')
        correctEl.text('Right!')
    // }else if(userChoice === questionIndex[3]){

    
    }else{
        console.log('Wrong!')
        correctEl.text('Wrong!')
        secondsLeft -= 15
    }
};

var h5El= $('h5')

// The function I used to eng the game and exit the questions element.
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
        // Logging the information to local storage 
        var initials = $("input[type='text']").val();
        localStorage.setItem('Initials', initials);
        localStorage.setItem('score',(secondsLeft));
        localStorage.getItem(initials);
        localStorage.getItem(secondsLeft);
        highScorePage.append(initials);
        highScorePage.append(secondsLeft);


    })
}

// The function I wrote to show the questions and using event listeners move through each question after the user picks a choice.
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


// Still in work, this is the element selection and events set up to generate the code used to show the high scores 
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
/* console.log(timerEl)
^ console.logged to make sure timer was working*/


// The time function to count down the games clock.
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


// The event listener used to start the game once the start game button is clicked.
startbtnEl.on("click", function(){
    questionIndex = 0;
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
    /* timerId = setTime();
    console.log(secondsLeft);
    setTimeout(function(){
    alert('Time is up!');
    }, 75000); */
    });


/* Create html elements for the timer and the start button
Variables to keep track of
Current time (stopped or live)
High Scores
Name
Score (number)
Questions (array)
Each Question (dictionary)
Question text (string)
Answers [String array]
Correct answer number (represents correct answer in the array)
Bind event to starts game
Starting a game does the following (create function called askQuestion)
Starts the timer (however that works)
Draws a question on the page */
