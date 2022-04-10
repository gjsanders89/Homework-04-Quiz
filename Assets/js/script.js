

var qArray = [
    {
        question: "Where was the first battle of World War II?",
        answers: {
            a: 'Warsaw',
            b: 'Denmark',
            c: 'Westerplatte',
            d: 'Copenhagen'
        },
        correctAnswer: 'Westerplatte'
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