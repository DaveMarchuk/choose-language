function getSetSurvey(event)  {
  event.preventDefault();
  const question1 = document.querySelector("input[name='colorFav']:checked").value;
  const question2 = document.querySelector("input[name='birds']:checked").value;
  const question3 = document.querySelector("input[name='milkFirst']:checked").value;
  const question4 = document.querySelector("input[name='devType']:checked").value;
  const question5 = document.querySelector("input[name='pets']:checked").value;
  console.log(question1);
  console.log(question2);
};

window.addEventListener("load", function()  {
  const form = document.getElementById("survey");
  form.addEventListener("submit",getSetSurvey);
});