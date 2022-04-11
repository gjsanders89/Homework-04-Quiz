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
    {
        question: "Where was the first true battle of World War II?",
        answers: {
            a: 'The Westerplatte Peninsula, Gdańsk, Poland',
            b: 'Warsaw, Poland',
            c: 'Copenhagen, Denmark',
            d: 'Sopot, Poland'


        },
        correctAnswer: 'The Westerplatte Peninsula, Gdańsk, Poland'
    },
    {
        question: "Finish the sentence:  <br /> The Polish army at Westerplatte was only believed to be capable of lasting ________ hours.",
        answers: {
            a: 'twenty-four',
            b: 'twelve',
            c: 'seven',
            d: 'three'
        },
        correctAnswer: 'seven'
    },
    {
        question: "How long did the Polish soldiers hold Westerplatte before surrendering?",
        answers: {
            a: 'Twenty-four hours',
            b: 'Three days',
            c: 'Seven hours',
            d: 'Seven days'
        },
        correctAnswer: 'Seven days'
    },
    {
        question: "The Polish army surrendered Westerplatte to the German army due to what reason?",
        answers: {
            a: 'Warsaw, the capital of Poland, had been surrounded.',
            b: 'They had suffered severe casualties.',
            c: 'A commander was secretly working for Germany.',
            d: 'The ranking officer on the Peninsula had been captured.'
        },
        correctAnswer: answers[a]
    },
    {
        question: "Warsaw was known as _________ before World War II.",
        answers: {
            a: 'the Shining City of the East',
            b: 'the Rome of the North',
            c: 'the Crown Jewel of Poland',
            d: 'the Paris of the North'
        },
        correctAnswer: 'the Paris of the North'
    },
    {
        question: "Warsaw was under siege from 1939 until __________.",
        answers: {
            a: '1942 (three years)',
            b: '1945 (six years)',
            c: '1940 (one year)',
            d: '1943 (four years)'
        },
        correctAnswer: '1945 (six years)'
    },
    {
        question: "During the German occupation of Warsaw, over ___________ Polish citizens were killed in the city.",
        answers: {
            a: '50,000',
            b: '100,000',
            c: '150,000',
            d: '200,000'
        },
        correctAnswer: '150,000'
    },
    {
        question: "During the German occupation of Poland, the Polish Underground State were able to impliment which of the following in their secret resistance?",
        answers: {
            a: 'Schooling for children.',
            b: 'A postal service.',
            c: 'A judicial system.',
            d: 'All of the above.'
        },
        correctAnswer: 'All of the above.'
    },
    {
        question: "QUESTION",
        answers: {
            a: 'XXXX',
            b: 'XXXX',
            c: 'XXXX',
            d: 'XXXX'
        },
        correctAnswer: 'ANSWER'
    },
    {
        question: "QUESTION",
        answers: {
            a: 'XXXX',
            b: 'XXXX',
            c: 'XXXX',
            d: 'XXXX'
        },
        correctAnswer: 'ANSWER'
    }
];

function presentQuiz(qArray, quizBox, resultsBox, submitBtn) {

    function showQs(qArray, quizBox) {
        // Showing the questions
    }

    function showScore(qArray, quizBox, resultsBox) {
        //presenting the score
    }

    // Shows the questions and the quiz box
    showQs(qArray, quizBox);

    // Shows results upon submission of results.
    submitBtn.onclick = function () {
        showScore(qArray, quizBox, resultsBox);
    }
}