// add event listener handle to button id challenge-submit1 - submitAnswers
const submitAnswersBtn = document.getElementById("challenge-submit1");
submitAnswersBtn.addEventListener("click", submitAnswers);

const resultsTable1 = document.getElementById("challenge-results1");

function submitAnswers() {
  showResults();
}

/*

onsubmit,
  store inputs in array

  use loop to populate results array with input array


quiz:

according to the home page of this site, the first important skill for coders is:


according to the home page of this site, the second important skill for coders is:


according to the home page of this site, the third important skill for coders is:

  submit

results

  try again

*/

function showResults() {
  // console.log("showAnswers");
  resultsTable1.style.visibility = "visible";
}

//Regex validation
var element = document.getElementById("form1");
var ele = document.getElementById("feedback");
console.log(element);
if (element.addEventListener) {
  element.addEventListener("submit", main_validator, true);
} else if (ele.attachEvent) {
  element.attachEvent("onsubmit", main_validator);
}
function main_validator(e) {
  console.log("validate");
  console.log(e);
  e.preventDefault();
  ele.innerHTML = "";
  if (
    check_answer(e.target[0].value) &&
    check_answer(e.target[1].value) &&
    check_answer(e.target[2].value)
  ) {
    element.submit();
  }
}
function check_answer(answer) {
  var re = new RegExp(/^[a-zA-Z0-9_.-]*$[a-zA-Z_.-]*$/g);
  var message = "";
  var someWrong = false;
  console.log(re.test(answer));

  if (!re.test(answer)) {
    message += "Answer(s) can only be [a-z], [A-Z], or (-,_)";
    someWrong = true;
  }
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
