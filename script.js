const input = document.querySelector(".input-todo");
const taskList = document.querySelector(".task-text");
const button = document.querySelector(".add-button");

function addTask() {
  if (input.value === "") {
  } else {
    let li = document.createElement("li");
    li.textContent = input.value;
    taskList.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "&times";
    li.appendChild(span);
  }
  input.value = "";
}

taskList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
button.addEventListener("click", function () {
  addTask();
});
