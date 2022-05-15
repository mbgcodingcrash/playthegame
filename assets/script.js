//Variables for the quiz
var startTime = 100;
const questionBox =document.getElementById('question-box')
const startButton = document.getElementById('startBtn')
const questionEl= document.getElementById('questionLine')
const question= document.getElementById('question')
const answrBtnEL= document.getElementById('answerBtns')

startButton.addEventListener('click', startQuiz)

//List of questions and answers
const questions = [
    {
        question:'Is coding fun?'
       // answers: [
         //   {text: 'Yes', correct: true}
           // {text: 'No', correct: false}
            //{text: 'Definately No', correct: false}
           // {text: 'A little bit No', correct: false}
       // ]
    }
]



function startQuiz(){
    startButton.classList.add('hide')
    questionBox.classList.remove('hide')
    questionEl.classList.remove('hide')
    viewQuestion = questions
    currentQuestion = 0
    createNextQuestion() 

}

function createNextQuestion(){
    showQuestions(questions) 
        questionEl.innerText =questions
    }

function showQuestions(question){

}



