let start = document.querySelector("#start");

let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");


let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");


let result = document.querySelector("#result");
let points = document.querySelector("#points");

let choice_que = document.querySelectorAll(".choice_que");


let submit = document.querySelector("#submit");
let view = document.querySelector("#view");
let back = document.querySelector("#score__back");


let index = 0;
let timer = 0;
let interval = 0;
let correct = 0;

let initials = document.querySelector("#initials");
var msgDiv = document.querySelector("#result__msg");
let userInitials = document.querySelector("#user__initials");
let userScore = document.querySelector("#user__score");

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

start.addEventListener("click", () => {
    quiz.style.display = "block";
    start__wrapper.style.display = "none";
    
    interval = setInterval(countDown, 1000);
    loadData();

    choice_que.forEach(removeActive => {
        removeActive.classList.remove("active");
    })

    total_correct.innerHTML = `${correct = 0} Out Of ${MCQS.length} Questions`;
});

choice_que.forEach((choices, choiceNo) => {
    choices.addEventListener("click", () => {
        choices.classList.add("active");
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


next_question.addEventListener("click", () => {
    if (index !== MCQS.length - 1) {
        index++;
        choice_que.forEach(removeActive => {
            removeActive.classList.remove("active");
        })      
        total_correct.style.display = "block";
        total_correct.innerHTML = `${correct} Out Of ${MCQS.length} Questions`;
        clearInterval(interval);
        interval = setInterval(countDown, 1000);

        loadData();
    } else {
        index = 0;

        clearInterval(interval);
        quiz.style.display = "none";
        points.innerHTML = `Your final score is ${correct}`;
        result.style.display = "block";
    }
    for (i = 0; i <= 3; i++) {
        choice_que[i].classList.remove("disabled");
    }
})

function saveScore(initialsValue){
    var scoreObj = {
        name: initialsValue,
        score: correct
    }
    console.log(scoreObj);
<<<<<<< HEAD
    window.localStorage.setItem('highScores', JSON.stringify(scoreObj));
}

=======

    window.localStorage.setItem('highScores', JSON.stringify(scoreObj));
}

//What happens when you click 'Submit'
>>>>>>> e6b0d68d7ac1a4f966a4ca36f0e98a1d45b2514c
submit.addEventListener("click", () => {
        result.style.display = "none";
        score.style.display = "block";

        var initialsValue = initials.value.trim();
        console.log(initialsValue);
        saveScore(initialsValue);
});

<<<<<<< HEAD
=======
// //Display message
// function displayMessage(type, message) {
//     msgDiv.textContent = message;
//     msgDiv.setAttribute("class", type);
// }

//What happens when you click 'View high score'
>>>>>>> e6b0d68d7ac1a4f966a4ca36f0e98a1d45b2514c
view.addEventListener("click", () => {
        start__wrapper.style.display = "none";
        console.log(view);
        score.style.display = "block";

        var scores = JSON.parse(window.localStorage.getItem('highScores'));
        var liTags = document.createElement('li');
        liTags.textContent = scores.
        console.log(scores);
});

back.addEventListener("click", () => {
    score.style.display = "none";
    start__wrapper.style.display = "flex";
});


