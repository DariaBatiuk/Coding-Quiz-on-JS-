//Start Section
let start = document.querySelector("#start");

//Quiz Section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

//question Section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

//Multiple Choices Of Questions
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

//correct and next Button
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

//Result Section
let result = document.querySelector("#result");
let points = document.querySelector("#points");

//Get All 'H4' From Quiz Section (MCQS)
let choice_que = document.querySelectorAll(".choice_que");

//Scores 
let submit = document.querySelector("#submit");
let view = document.querySelector("#view");
let back = document.querySelector("#score__back");


let index = 0;
let timer = 0;
let interval = 0;

//total points
let correct = 0;

//store Score Value
let initials = document.querySelector("#initials");
var msgDiv = document.querySelector("#result__msg");
let userInitials = document.querySelector("#user__initials");
let userScore = document.querySelector("#user__score");



//Creating Timer For Quiz Timer Section

let countDown = () => {
    if (timer === 0 || timer < 0) {
        clearInterval(interval);
        next_question.click();
    } 
    else {
        timer--;
        time.innerText = timer;
    }
}

//setInterval(countDown,1000);

let loadData = () => {
    questionNo.innerText = index + 1 + ". ";
    questionText.innerText = MCQS[index].question;
    option1.innerText = MCQS[index].choice1;
    option2.innerText = MCQS[index].choice2;
    option3.innerText = MCQS[index].choice3;
    option4.innerText = MCQS[index].choice4;

    //    timer start
    timer = 40;
}

loadData();

//what happen when 'Start' Button Will Click
start.addEventListener("click", () => {
    quiz.style.display = "block";
    start__wrapper.style.display = "none";
    
    interval = setInterval(countDown, 1000);
    loadData();

    //    remove All Active Classes When Continue Button Will Click

    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })

    total_correct.innerHTML = `${correct = 0} Out Of ${MCQS.length} Questions`;
});

choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");
        //check answer
        if (choiceNo === MCQS[index].answer) {
            correct++;
            total_correct.innerHTML = `Correct!`;
            total_correct.style.display = "block";
            clearInterval(interval);
        //disable All Options When User Select An Option
            for (i = 0; i <= 3; i++) {
                choice_que[i].classList.add("disabled");
            }
        } else {
            correct += 0;
            total_correct.innerHTML = `Wrong!`;
            total_correct.style.display = "block";
            timer -= 10;
        }
        
    })
});

//what happen when 'Next' Button Will Click
next_question.addEventListener("click", () => {
    //    if index is less then MCQS.length
    if (index !== MCQS.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })       
       
        //result
        total_correct.style.display = "block";
        total_correct.innerHTML = `${correct} Out Of ${MCQS.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
        
        //question
        loadData();
    } else {
        index = 0;


        //when Quiz Question Complete Display Result Section
        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `Your final score is ${correct}`;
        result.style.display = "block";
    }
    for (i = 0; i <= 3; i++) {
        choice_que[i].classList.remove("disabled");
    }
})

//What happens when you click 'Submit'
submit.addEventListener("click", () => {
        result.style.display = "none";
        score.style.display = "block";
});

//Display message
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
    var score_name = localStorage.getItem("initials");
    var score_number = localStorage.getItem$({correct});
  
    if (!score_name || !score_number) {
      return;
    }
  
    userInitials.textContent = score_name;
    userScore.textContent = score_number;
  }

//What happens when you click 'View high score'
view.addEventListener("click", () => {
        start__wrapper.style.display = "none";
        console.log(view);
        score.style.display = "block";
});

//What happens when you click 'Go back'
back.addEventListener("click", () => {
    score.style.display = "none";
    start__wrapper.style.display = "flex";
});


