
let Questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choice1: 'script',
        choice2: 'css',
        choice3: 'style',
        choice4: 'span',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choice1: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choice1: '// Comment',
        choice2: '!-- Comment --',
        choice3: '/* Comment */',
        choice4: "! Comment",
        answer: 2,
    }, 
]

// let turn = 1;

// window.onload = function(){
//     randomQuestion();
//     startQuiz();

// };

// let index = 0;

// function randomQuestion(){
//     index = Math.floor(Math.random()*Questions.length);
// }

// function startQuiz(){
//     let ques = document.querySelector(".question");

//     let q = Questions[index].question;
//     ques.innerHTML = q;

//     let c1 = document.querySelector("#c1");
//     c1.innerHTML = Questions[index].choice1;

//     let c2 = document.querySelector("#c2");
//     c2.innerHTML = Questions[index].choice2;

//     let c3 = document.querySelector("#c3");
//     c3.innerHTML = Questions[index].choice3;

//     let c4 = document.querySelector("#c4");
//     c4.innerHTML = Questions[index].choice4;
// }

// let choices =  document.getElementsByClassName("choice");
//     for(let i=0;i<4;i++){
//         choices[i].addEventListener("click", function(e){
//             if(Questions.lenght<=0){
//                 document.querySelector(".question-box").innerHTML = "Game Over";
//             }

//             Questions.splice(index,1);
            
//             setTimeout(startQuiz(turn++), 2000);
            
//         })  
//     }

let turn = 1;
let index = 0;

window.onload = function(){
    randomQuestion();
    startQuiz();
};

function randomQuestion(){
    if (Questions.length > 0) {
        index = Math.floor(Math.random()*Questions.length);
    } else {
        endQuiz();
    }
}


let score = 0;
let attempted = 0;

function startQuiz(){
    if (Questions.length >=1) {
        let ques = document.querySelector(".question");
        let choices = document.querySelectorAll(".choice");
        ques.textContent = Questions[index].question;
        choices.forEach((choice, i) => {
            choice.textContent = Questions[index]["choice" + (i+1)];
            choice.style.backgroundColor = "";
            choice.onclick = function() {
                attempted += 1;
                document.querySelector("#attempted").textContent = attempted+"/3";
                if (i+1 === Questions[index].answer) {
                    choice.style.backgroundColor = "green";
                    score += 10;
                    document.querySelector("#score").textContent = score;
                } else {
                    choice.style.backgroundColor = "red";
                }
                Questions.splice(index, 1);
                setTimeout(randomQuestion, 1000); 
                setTimeout(startQuiz, 1000);
            };
        });
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.querySelector(".question-box").style.display = "none";
    document.querySelector("#endScreen").style.display = "block";
    document.querySelector("#scoreBoard").classList.add("shift_scoreboard");

    document.querySelector("#playAgainButton").onclick = function() {
        Questions = [
            {
                question: 'Which HTML tag is used to define an inline style?',
                choice1: 'script',
                choice2: 'css',
                choice3: 'style',
                choice4: 'span',
                answer: 3,
            },
            {
                question: 'Which property is used to change the text color in CSS?',
                choice1: 'text-color',
                choice2: 'font-color',
                choice3: 'text-style',
                choice4: 'color',
                answer: 4,
            },
            {
                question: 'Which of the following is the correct way to comment in HTML?',
                choice1: '// Comment',
                choice2: '!-- Comment --',
                choice3: '/* Comment */',
                choice4: "! Comment",
                answer: 2,
            }, 
        ];

        document.querySelector(".choices").classList.add("shift")
        document.querySelector(".question").classList.add("shift")
        score = 0;
        document.querySelector("#score").textContent = score;
        attempted = 0;
        document.querySelector("#attempted").textContent = attempted;
        document.querySelector(".question-box").style.display = "block";
        document.querySelector("#endScreen").style.display = "none";
        document.querySelector("#scoreBoard").classList.remove("shift_scoreboard");
        randomQuestion();
        startQuiz();
    };
    document.querySelector("#homeButton").onclick = function() {
        window.location.href = "http://127.0.0.1:5500/index.html";
    };
}