var readlineSync = require("readline-sync")
var userName = readlineSync.question("What is your name  ")
console.log("Hello, Welcome " + userName + " How much do you know me, Lets see ")
score = 0

//function
function quiz(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("you are correct")
    score++
  } else {
    console.log("you are wrong")
    score--
    console.log("Right answer:" + questionList[i].answer);
  }

}
//array of questions
var questionList = [{
  question: "Who is my favorite superhero? ",
  answer: "ironman"
},
{
  question: "Which is my current favorite song? ",
  answer: "anti-hero",
},
{
  question: "What is my favourite cuisine? ",
  answer: "chinese",
},
{
  question: "What is my hobby? ",
  answer: "travelling",
},
{
  question: "What is my favourite color? ",
  answer: "black"
},
{
  question: "Who is my favourite pop singer? ",
  answer: "justin bieber"
},
{
  question: "Which group is my favourite pop group? ",
  answer: "bts"
}

]

//loop

for (var i = 0; i < questionList.length; i++) {
  currentQuestion = questionList[i]
  quiz(currentQuestion.question, currentQuestion.answer)

  console.log("------------------------")

}


console.log("your score is: " + score)


if (score >= 4) {
  console.log("Yay, You won ")
} else {
  console.log("Let's catch up with each other")
}
