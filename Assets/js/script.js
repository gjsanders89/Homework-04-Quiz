var qArray = [
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