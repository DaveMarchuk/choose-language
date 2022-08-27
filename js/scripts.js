function getSetSurvey(event)  {
  event.preventDefault();
  const question1 = document.querySelector("input[name='colorFav']:checked").value;
  const question2 = document.querySelector("input[name='birds']:checked").value;
  const question3 = document.querySelector("input[name='milkFirst']:checked").value;
  const question4 = document.querySelector("input[name='devType']:checked").value;
  const question5 = document.querySelector("input[name='pets']:checked").value;

  let language;
  let displayResult = document.getElementById("message");
  displayResult.setAttribute("class","hidden");

  if (question4 === "backEnd" && question1 === "Blue" && question5 === "Dogs")  {
    language = "C++";
  } else if (question4 === "backEnd" && question2 === "yes")  {  
    language = "C++";
  } else if (question2 === "no" && question3 === "cereal" && question4 === "backEnd") {
    language = "Assembly";
  } else if (question2 === "yes" && question5 === "Cats" && question4 === "frontEnd") {
    language = "Python";
  } else if (question3 === "no" && question3 === "milk" && question4 === "frontEnd")  {
    language = "C++";
  } else if (question3 === "yes" && question4 === "backEnd" && question1 === "Red") {
    language = "Python";
  } else if (question1 === "Yellow" && question3 === "milk" && question4 === "backEnd") { 
    language = "Assembly";
  } else  {
    language = "Python";
  }

  displayResult.removeAttribute("class");
  document.getElementById("output").innerText = language;
};

window.addEventListener("load", function()  {
  const form = document.getElementById("survey");
  form.addEventListener("submit",getSetSurvey);
});