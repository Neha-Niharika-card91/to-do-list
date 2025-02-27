document.addEventListener("DOMContentLoaded", function () {
  let key = "";
  let value = "";
  let tasks = [];
  console.log("Loaded");
  let formID = document.getElementById("formID");
  let inputValue = document.getElementById("inputValue");
  let listElement = document.getElementById("listElement");

  formID.addEventListener("submit", handleSubmit);
  formID.addEventListener("change", handleChange);
  let element;
  handleStoredData();
  function handleSubmit(event) {
    event.preventDefault();
    for (let j = 0; j < tasks.length; j++) {
      localStorage.setItem(tasks[j].key, tasks[j].value);
      //console.log("Key ");
      //console.log("Value ");
      console.log(localStorage.length);
      inputValue.value = "";
      handleStoredData();
    }
  }
  function handleChange(event) {
    value = event.target.value;
    key = event.target.id + value;

    tasks.push({ key, value });
    //console.log(tasks);
  }
  function handleStoredData() {
    listElement.textContent = "";
    for (let j = 0; j < localStorage.length; j++) {
      element = document.createElement("li");
      let v = localStorage.key(j);
      element.textContent = localStorage.getItem(v);
      console.log(element);
      listElement.appendChild(element);
    }
  }
});
