const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must type something in the box!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.classList.add("show");
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7"; // × symbol
    li.appendChild(span);
  }
  inputBox.value = "";
}

// Handle task check/uncheck and delete
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    const li = e.target.parentElement;
    li.classList.add("fall");
    setTimeout(() => {
      li.remove();
    }, 300);
  }
});
