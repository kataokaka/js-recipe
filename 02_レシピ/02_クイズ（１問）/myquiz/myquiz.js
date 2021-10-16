const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

const quiz = {
  text: "この公園の名前は何でしょう？",
  image: "Johoku-Chuo-Park.jpg",
  choices: [
    {
      text: "光が丘公園",
      feedback:
        "残念！光が丘公園には美味しいパン屋さんがあります。",
    },
    {
      text: "城北中央公園",
      feedback: "正解!城北中央公園は板橋区にあり、近くに荒川も流れているので散歩にオススメです。",
    },
    {
      text: "石神井公園",
      feedback: "残念!石神井公園は三宝寺池がオススメです。",
    },
    { 
      text: "昭和記念公園",
      feedback: "残念!昭和記念公園は春にチューリップを見に行くのがオススメです。",  

    },
  ],
}

const reloadQuiz = function() {
  quizText.textContent = "Q." + quiz.text
  quizImage.src = "./images/" + quiz.image

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

const choose = function(choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  choose(0)
}
choice2.onclick = function() {
  choose(1)
}
choice3.onclick = function() {
  choose(2)
}
choice4.onclick = function(){
    choose(3)
}

reloadQuiz()