//Variables for the quiz
var startTime = 60;
const questionBox =document.getElementById('question-box')
const startButton = document.getElementById('startBtn')
const questionEl= document.getElementById('questionLine')
const answerBtnEL= document.getElementsByClassName('answer')

startButton.addEventListener('click', startQuiz)

//List of questions and answers
const questionsArray = [ 
    'Is coding fun?', 'What is your favorite language', 'Why are coding'
]
const answersArray= ['Yes','No','Maybe','Definately Not']



function startQuiz(){
    startButton.classList.add('hide')
    questionBox.classList.remove('hide')
    questionEl.classList.remove('hide')
    createNextQuestion() 

}

function createNextQuestion(){
        questionEl.innerText = questionsArray[0]
        answerBtnEL.innerText= questionsArray.forEach 
    }



