const submitAnswersBtn = document.getElementById("challenge-submit1");
submitAnswersBtn.addEventListener("click", submitAnswers);

const resultsTable1 = document.getElementById("challenge-results1");

function submitAnswers(answer1, answer2, answer3) {
  let answers = [answer1, answer2, answer3];

  for (let i = 1; i <= 3; i++) {
    let ele = document.getElementById(`chal-ans-res${i}`);
    ele.innerHTML = answers[i - 1];

    let correctAnswer = document.getElementById(`chal-cor-ans${i}`);
    console.log(correctAnswer.innerHTML);

    let userAnswer = document.getElementById(`chal-ans-score${i}`);
    userAnswer.innerHTML = answers[i - 1] === correctAnswer.innerHTML;
  }

  showResults();
}

function showResults() {
  resultsTable1.style.visibility = "visible";
}

//Regex validation
var element = document.getElementById("form1");
var ele = document.getElementById("feedback");
if (element.addEventListener) {
  element.addEventListener("submit", main_validator, true);
} else if (ele.attachEvent) {
  element.attachEvent("onsubmit", main_validator);
}
function main_validator(e) {
  e.preventDefault();
  ele.innerHTML = "";

  let a1 = e.target[0].value;
  let a2 = e.target[1].value;
  let a3 = e.target[2].value;
  if (
    check_answer(e.target[0].value) &&
    check_answer(e.target[1].value) &&
    check_answer(e.target[2].value)
  ) {
    // element.submit();
    submitAnswers(a1, a2, a3);
  }
}
function check_answer(answer) {
  var re = new RegExp(/^[a-zA-Z0-9_.-]*$/g);
  var message = "";
  var someWrong = false;
  // console.log(re.test(answer));

  // if (!re.test(answer)) {
  //   message += "Answer(s) can only be [a-z], [A-Z], or (-,_)";
  //   someWrong = true;
  // }
  if (answer.length > 20) {
    message += "\nAnswer(s) must be less than 20 characters";
    someWrong = true;
  }
  if (answer.length <= 0) {
    message += "\nAnswer(s) must be at least 1 character";
    someWrong = true;
  }
  if (someWrong) {
    var para = document.createElement("p");
    para.classList.add("danger");
    var t = document.createTextNode(message);
    para.appendChild(t);
    ele.appendChild(para);
    return false;
  }
  return true;
}
