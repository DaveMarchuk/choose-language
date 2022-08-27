function getSetSurvey(event)  {
  event.preventDefault();
  const question1 = document.querySelector("input[name='colorFave']:checked");
  const question2 = document.querySelector("input[name='birds']:checked");
  const question3 = document.querySelector("input[name='milkFirst']:checked");
  const question4 = document.querySelector("input[name='devType']:checked");
  const question5 = document.querySelector("input[name='pets']:checked");
  console.log(question1);

};