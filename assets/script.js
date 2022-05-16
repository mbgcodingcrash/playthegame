//Variables for the quiz
var startTime = 60;
let timerEl= document.getElementById('timer')
const questionBox =document.getElementById('question-box')
const startButton = document.getElementById('startBtn')
const questionEl= document.getElementById('questionLine')
const answerBtnEL= document.getElementsByClassName('answer')


startButton.addEventListener('click', startQuiz)



//start the quizz function
function startQuiz(){
    startButton.classList.add('hide')
    questionBox.classList.remove('hide')
    questionEl.classList.remove('hide')
    createNextQuestion() 
    countdown()

}
//How to display new questions
function createNextQuestion(){
        questionEl.innerText =questionsArray
        //answerBtnEL.innerText= questionsArray.forEach 
    }

//Countdown Function
var countdown =function (){
    timerEl.innerText=startTime
    startTime--;
    if(startTime ===0){
        clearInterval(startCountdown)
    }
}
var startCountdown =setInterval(countdown, 1000);



//List of questions and answers
const questionsArray = [ {
    
    question: 'Is coding fun?',
    answers: [
        {text: 'Yes'},
        {text:'No'},
        {text:'Maybe'},
        {text:'Definately Not'}
    ]},
    {
        question: 'What is your favorite language', 
        answers:[
        {text: 'Cheesecake'},
        {text:'JavaScript'},
        {text:'Pie'},
        {text:'Definately Not Pie'}
        ]},

    {question: 'Why are coding',
    answers: [
        {text: 'Make all the Money'},
        {text:'Lose all the Money'},
        {text:'MaWahahahah Not'},
        {text:'Definately Not'}
    ]},
    {
        question: 'Did this make your head hurt?',
        answers: [
        {text: 'Yes'},
        {text:'No'},
        {text:'Maybe'},
        {text:'Definately Not'}
        ]   
    }
]

