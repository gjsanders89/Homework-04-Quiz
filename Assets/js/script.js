var quizIntro = document.getElementById("quiz-intro");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var answerChoices = document.getElementById("answer-choices");
var submit = document.getElementById("submit");
var judgement = document.getElementById("judgement");
var userAnswer = document.getElementById("user-answer");
var input = document.getElementById("input");
var correctInput = document.getElementById("correct-input");
// This is going to be a status, not a variable so to speak. It will be like "On 'correct-answer' run 'correct-input' process."
var correctAnswer = document.getElementById("correct-answer");
// Which means that this is a variable for each question where it is a static thing, independent of user input. The correct answer to every "first battle" question instance will be "Westerplatte", every time.
var wrongInput = document.getElementById("wrong-input");
var resultsBox = document.getElementById("results-box");
var results = document.getElementById("results");
var qArray = [
    "Where was the first true battle of World War II?",
    "Finish the sentence: The Polish army at Westerplatte was only believed to be capable of lasting __________ hours.",
    "How long did the Polish soldiers hold Westerplatte before surrendering?",
    "The Polish army surrendered Westerplatte to the German army due to what reason?",
    "Warsaw was known as __________ before World War II.",
    "Warsaw was under siege from 1939 until __________.",
    "During the German occupation of Warsaw, over __________ Polish citizens were killed in the city.",
    "During the German occupation of Poland, the Polish Underground State were able to impliment which of the following in the midst of their resistance?",
    "In the aftermath of the occupation of Warsaw, roughly what percentage of the city's buildings and infrastructure was completely destroyed?",
    "In the immediate aftermath of World War II, the Soviet Union moved nearly 22,000 Polish __________ into Russia, where they were killed en masse and left in mass graves. This incident is called the Katyn Massacre."
];

var correctAnswers = [
    'The Westerplatte Peninsula, Gdańsk, Poland',
    'seven',
    'Seven days',
    'Warsaw, the capital of Poland, had been surrounded.',
    'the Paris of the North',
    '1945 (six years)',
    '150,000',
    'All of the above.',
    '90%',
    'All of the above.'
];

var allAnswers = new Array();
allAnswers[0] = new Array('The Westerplatte Peninsula, Gdańsk, Poland', 'Warsaw, Poland', 'Copenhagen, Denmark', 'Sopot, Poland');
allAnswers[1] = new Array('twenty-four', 'twelve', 'seven', 'three');
allAnswers[2] = new Array('Twenty-four hours', 'Three days', 'Seven hours', 'Seven days');
allAnswers[3] = new Array('Warsaw, the capital of Poland, had been surrounded.', 'They had suffered severe casualties.', 'A commander was secretly working for Germany.', 'The ranking officer on the Peninsula had been captured.');
allAnswers[4] = new Array('the Shining City of the East', 'the Rome of the North', 'the Crown Jewel of Poland', 'the Paris of the North');
allAnswers[5] = new Array('1942 (three years)', '1945 (six years)', '1940 (one year)', '1943 (four years)');
allAnswers[6] = new Array('50,000', '100,000', '150,000', '200,000');
allAnswers[7] = new Array('Schooling for children.', 'A postal service.', 'A judicial system.', 'All of the above.');
allAnswers[8] = new Array('60%', '70%', '80%', '90%');
allAnswers[9] = new Array('twenty-four', 'twelve', 'seven', 'three');

var timeLeft = 60;

var qNum = 0;
var finalScore = 0;

var leaderBoard = [];
var timerInterval;

// Below, I am setting up the timer. I have indicitative text, a -1/sec parameter, and a process at the end of the countdown to show/store scores and times, as well as ending the countdown.

function countdown() {
    if (timeLeft > 0) {
        timer.textContent = "Timer: " + timeLeft;
        timeLeft--;
    }

    else {
        timer.textContent = "";
        var feedScoreStatus = feedScore.dataset.state;
        feedScore.setAttribute("class", "shown");
        feedScoreStatus = "shown";
        question.dataset.state = "hidden";
        question.setAttribute("class", "hidden");
        resultsBox.setAttribute("class", "hidden");
        answerChoices.innerHTML = "";
        storeTime();
        showFinalScore();
        stopTimer();
    }
}

// function presentQuiz(qArray, quizBox, resultsBox, submitBtn) {

//     function showQs(qArray, quizBox) {
//         Showing the questions
//     }

//     function showScore(qArray, quizBox, resultsBox) {
//         presenting the score
//     }

//     Shows the questions and the quiz box
//     showQs(qArray, quizBox);

//     Shows results upon submission of results.
//     submitBtn.onclick = function () {
//         showScore(qArray, quizBox, resultsBox);
//     }
// }