document.addEventListener("DOMContentLoaded", function () {
  let value = "";
  let tasks = [];
  console.log("Loaded");
  //localStorage.clear();
  let formID = document.getElementById("formID");
  let inputValue = document.getElementById("inputValue");
  let listElement = document.getElementById("listElement");

  formID.addEventListener("submit", handleSubmit);
  formID.addEventListener("change", handleChange);
  let element;
  handleStoredData();
  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    inputValue.value = "";
    handleStoredData();
  }
  function handleChange(event) {
    value = event.target.value;
    if (localStorage.length === 0) {
      tasks.push({ value });
    } else {
      tasks = JSON.parse(localStorage.getItem("Tasks"));
      tasks.push({ value });
    }

    //console.log(tasks);
  }
  function handleStoredData() {
    listElement.textContent = "";
    let list = JSON.parse(localStorage.getItem("Tasks"));
    if (localStorage.length > 0) {
      console.log(list);
      for (j = 0; j < list.length; j++) {
        console.log(`${list[j]} has value ${list[j].value}`);
        element = document.createElement("li");
        element.textContent = list[j].value;
        listElement.appendChild(element);
      }
    }
  }
});
