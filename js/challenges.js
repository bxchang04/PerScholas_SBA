// add event listener handle to button id challenge-submit1 - submitAnswers
const submitAnswersBtn = document.getElementById("challenge-submit1");
submitAnswersBtn.addEventListener("click", submitAnswers);

const resultsTable1 = document.getElementById("challenge-results1");
console.log(resultsTable1);

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
  console.log("showAnswers");
  resultsTable1.style.visibility = "visible";
}
