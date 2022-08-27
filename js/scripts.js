function getSetSurvey(event)  {
  event.preventDefault();
  const question1 = document.querySelector("input[name='colorFav']:checked").value;
  const question2 = document.querySelector("input[name='birds']:checked").value;
  const question3 = document.querySelector("input[name='milkFirst']:checked").value;
  const question4 = document.querySelector("input[name='devType']:checked").value;
  const question5 = document.querySelector("input[name='pets']:checked").value;

  let language;

  if (question4 === "frontEnd")  {
    language = "Python";
  } else if (question4 === "backEnd")  {
    language = "Assembly";
  } else if (question4 === "backEnd" && question1 === "Blue" || question5 === "Dogs")  {
    language = "C++";
  } else if (question4 === "frontEnd" && question2 === "yes")  {  
    language = "C++";
  } else if (question3 === "cereal")  {
    language = "Assembly";
  } else if (question2 === "no")  {
    language = "Python";
  } else  {
    language = "Stop messing around. Input something real"
  }
  console.log(language);
  document.getElementById("output").innerText = language;

};

window.addEventListener("load", function()  {
  const form = document.getElementById("survey");
  form.addEventListener("submit",getSetSurvey);
});