document.addEventListener("DOMContentLoaded", function () {
  let value = "";
  let tasks = [];
  //localStorage.clear();
  let formID = document.getElementById("formID");
  let inputValue = document.getElementById("inputValue");
  let listElement = document.getElementById("listElement");

  formID.addEventListener("submit", handleSubmit);
  formID.addEventListener("change", handleChange);
  let element;
  handleStoredData(); //load stored data
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("Tasks", JSON.stringify(tasks));
    inputValue.value = "";
    handleStoredData(); //load data entered on submit
  };
  const handleChange = (event) => {
    value = event.target.value;
    if (value !== "" && localStorage.length === 0) {
      tasks.push({ value });
    }
    if (localStorage.length != 0) {
      tasks = JSON.parse(localStorage.getItem("Tasks"));
      tasks.push({ value });
    }

    //console.log(tasks);
  };
  const handleStoredData = () => {
    listElement.textContent = "";
    let list = JSON.parse(localStorage.getItem("Tasks"));
    if (localStorage.length > 0) {
      for (j = 0; j < list.length; j++) {
        console.log(`${list[j]} has value ${list[j].value}`);
        element = document.createElement("li");
        element.textContent = list[j].value;
        listElement.appendChild(element);
      }
    }
  };
});
