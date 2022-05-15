var startTime = 100;



const questionBox =document.getElementById('question-box')
const startButton = document.getElementById('startBtn')
const question= document.getElementById('questions')
startButton.addEventListener('click', startQuiz)



function startQuiz(){
    startButton.classList.add('hide')
    questionBox.classList.remove('hide')
    question.classList.remove('hide')

    

}

