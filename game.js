//Questions Constructor
function CreateQuestion(country, question, answers, correctanswer) {
  this.country = country;
  this.question = question;
  this.answers = answers;
  this.correctanswer = correctanswer

}
//Creating the Questions
let question1 = new CreateQuestion("Greece", "Who is Zeus's mother?", ["Afrodita", "Rhea", "Helena", "Gaya"], "Rhea")
let question2 = new CreateQuestion("Greece", "Name the capital of Greece", ["Athens", "Istanbul", "Saloniki", "Tel-Aviv"], "Athens")
let question3 = new CreateQuestion("Greece", "Which coin is the national coin of Greece?", ["Greek Dollar", "Drachma", "Yen", "Gilda"], "Drachma")
let question4 = new CreateQuestion("Greece", "What is the largest island in Greece?", ["Crete", "Rhodes", "Paros", "Mykonos"], "Crete")
let question5 = new CreateQuestion("Greece", "When was the first Olimpic Games in the modern era?", ["1904", "1896", "1900", "1888"], "1896")
let question6 = new CreateQuestion("Greece", "What sea lies to the east of Greece?", ["Baltic", "Black Sea", "Aegean", "Dead Sea"], "Aegean")
let question7 = new CreateQuestion("Greece", "On what day does Greece celebrate its Independence Day?", ["March 25th", "April 14th", "March 29th", "January 28th"], "March 25th")
let question8 = new CreateQuestion("Greece", "On which island do ferries arrive at the port of Gaios?", ["Rhodes", "Paxos", "Paros", "Corfu"], "Paxos")
let question9 = new CreateQuestion("Greece", "What is the name of Athens' port?", ["Docks of Greece", "Posidon's Door", "Analiva", "Piraeus"], "Piraeus")

let question10 = new CreateQuestion("Mexico", "How many states does Mexico have?", ["31", "16", "19", "27"], "31")
let question11 = new CreateQuestion("Mexico", "What is the highest mountain in Mexico?", ["Popocatepetl", "Sierra Negra", "Orizaba", "Ajusco"], "Orizaba")
let question12 = new CreateQuestion("Mexico", "How many colors are in the Mexican flag?", ["16", "3", "5", "9"], "16")
let question13 = new CreateQuestion("Mexico", "Which countries border Mexico?", ["U.S, Belize and Guatemala", "U.S, Belize and Panama", "Belize and U.S", "Colombia, U.S and Guatemala"], "U.S, Belize and Guatemala")
let question14 = new CreateQuestion("Mexico", "What is the capital of Mexico?", ["Guadalajara", "Tijuana", "Acapulco", "Mexico City"], "Mexico City")
let question15 = new CreateQuestion("Mexico", "Which U.S. state does Tijuana share a border with?", ["California", "Texas", "Georgia", "Mississippi"], "California")
let question16 = new CreateQuestion("Mexico", "In which Mexican state is Cancun located?", ["Tabasco", "Quintana Roo", "Nuevo Leon", "Yucatan"], "Quintana Roo")
let question17 = new CreateQuestion("Mexico", "What is the biggest drug cartel in Mexico?", ["Chompiz Cartel", "Sinaloa Cartel", "Cartel De Tijuana", "Cartel De Nulik"], "Sinaloa Cartel")
let question18 = new CreateQuestion("Mexico", "How do you call a mexican hat?", ["Sombrero", "Concha", "Dejo", "Conejo"], "Sombrero")


//Questions Array
let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9]
let mexicoQuestions = [question10, question11, question12, question13, question14, question15, question16, question17, question18]

const allTheQuestions = [questions, mexicoQuestions]



//Answers Buttons
var answersButtons = document.getElementsByClassName("answers-btn");
let box1 = document.getElementById("boxa")
let box2 = document.getElementById("boxb")
let box3 = document.getElementById("boxc")
let box4 = document.getElementById("boxd")
let boxes = [box1, box2, box3, box4]

let imageBox = document.getElementsByClassName("container-img")[0]
let questionImageDiv = document.getElementsByClassName("game-section")
let questionDiv = document.getElementsByClassName("question")
var questionBox = document.createElement("div")
let theQuestion = document.getElementById("first-question-btn")
let questionOfTotal = document.getElementById("question-out-of-total")
let presentQuestion = document.createElement("h3") // create title
let timerDiv = document.getElementsByClassName("timer")[0]
let modal = document.getElementById("modal")
let scoreBox = document.getElementsByClassName("score")[0]


// //create a button to go over to the next country
// let newGameButton;
// function createNewGameButton() {
//   newGameButton = document.createElement("button")
//   newGameButton.classList.add("btn-nextgame")
//   newGameButton.innerHTML = "Continue Explore the World"
//   questionImageDiv[0].insertBefore(newGameButton, questionImageDiv[0].firstChild)
// }

let countryIndex = 0
// Creating a variable to get the question number
let questionNumber = 0
//Creating a variable to get the map remove dynamically
let mapRemover = 1
//Creating a variable to increase the save the score of the startGame
let score = 0

// Onclick function which checks if the button clicked value is equal to the correct answers
function checkAnswer(event, box) {
  //check if the player clicked on the correct question
  clearInterval(timer)
  let answerValue = event.target.value;
  if (answerValue == allTheQuestions[countryIndex][questionNumber].correctanswer) {
    document.getElementsByClassName("map" + mapRemover)[0].style.opacity = "10%";
    box.style.backgroundColor = "green"
    mapRemover++
    score++
  }
  else {
    box.style.backgroundColor = "red"
    //make right answer box with light green color
    for (let k = 0; k < boxes.length; k++) {
        if (allTheQuestions[countryIndex][questionNumber].correctanswer == boxes[k].value) {
        boxes[k].classList.add("rightbox")
      }
    }
    }


  if (questionNumber < allTheQuestions[countryIndex].length) {
    questionNumber++
    }

  //disable buttons
  for (var i = 0; i < answersButtons.length; i++) {
    answersButtons[i].disabled = true;
  }
  //check if its the last question - if so -
  //change the quesion to a statement about the score.
    if (questionNumber == allTheQuestions[countryIndex].length) {
      modal.style.display = "block"

      theQuestion.innerHTML = "Next Country"
      for (var j = 0; j < boxes.length; j++) {
            boxes[j].style.display = "none"
          }
  //game statement
      if (score < 4) {
        modal.innerHTML = "Damn! You explored just " + score + " of 9 parts of " + allTheQuestions[countryIndex][0].country + ". You still have a hell of a journey."
      }
      else if (score >=4 && score < 8) {
        modal.innerHTML = "Nice! You explored " + score + " of 9 parts of " + allTheQuestions[countryIndex][0].country + ". Practice a bit and try again."
      }
      else {
        modal.innerHTML = "WOW! You explored " + score + " of 9 parts of " + allTheQuestions[countryIndex][0].country + "! You are a real talent!"
        }
      theQuestion.disabled = false;
    }

      else {
      theQuestion.innerHTML = "Next Question"
      //make next question button enabled
      theQuestion.disabled = false;
  }
  scoreBox.innerHTML = "Score: " + score

}



function startGame() {
timer()
  //make the answers boxes without a light green color from the check answer function
  for (let k = 0; k < boxes.length; k++) {
      boxes[k].classList.remove("rightbox")
      }
    scoreBox.innerHTML = "Score: " + score
    if (questionNumber == 0) {

    theQuestion.innerHTML = "Next Question"
    imageBox.style.backgroundImage = "url('images/"+allTheQuestions[countryIndex][0].country+"-flag.png')"
  }
  // if (questionNumber == 9) {
  //
  // }
  if (questionNumber < allTheQuestions[countryIndex].length) {
    presentQuestion.remove()
    questionOfTotal.innerHTML = "Question " + (questionNumber + 1) + "/9" // show the number of the question

    //Show the  question
    presentQuestion.classList.add("present-question")
    presentQuestion.innerHTML = allTheQuestions[countryIndex][questionNumber].question // set the title as the question
    questionDiv[0].insertBefore(presentQuestion, questionDiv[0].firstChild) // add the question to the div
    //Show answers
    function showAnswers() {
      for (var j = 0; j < boxes.length; j++) {
        boxes[j].value = allTheQuestions[countryIndex][questionNumber].answers[j]
        boxes[j].innerHTML = allTheQuestions[countryIndex][questionNumber].answers[j]
        boxes[j].style.display = "inline-block"
        boxes[j].style.backgroundColor = "#f4f4f4"
      }
    }
    showAnswers()
    //make buttons enable
    for (var i = 0; i < answersButtons.length; i++) {
      answersButtons[i].disabled = false;
    }
    //make next question button disabled
    theQuestion.disabled = true;
    }
    else {
      nextCountry()

    }

}

function nextCountry() {
  score = 0
  questionNumber = 0
  mapRemover = 1
  countryIndex++
  modal.style.display = "none"

  //show world map agian
    for(var h = 1; h < 10; h++) {
      document.getElementsByClassName("map" + h)[0].style.opacity = "100%";
    }

  startGame()



}

function timer() {
    var sec = 9;
    var timer = setInterval(function() {
        timerDiv.innerHTML= "Seconds Left: 0:0" + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            timerDiv.innerHTML= "Time's up!"
            for (var i = 0; i < answersButtons.length; i++) {
              answersButtons[i].disabled = true;
            }
            theQuestion.disabled = false;
            questionNumber++
        }
        for (let l = 0; l < answersButtons.length; l++) {
          if (answersButtons[l].disabled == true){
            clearInterval(timer);
        }
                }
    }, 1000);
}
