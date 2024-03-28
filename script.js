let input = document.getElementById("input-box");
let lista = document.getElementById("list-container");

function addTask() {
  if (input.value === "") {
    alert("Unesite neki sadržaj!");
  } else {
    let newItem = document.createElement("LI");
    let span = document.createElement("SPAN");
    span.textContent = "x";
    newItem.textContent = input.value;
    lista.appendChild(newItem).append(span);
    input.value = "";
    span.addEventListener("click", () => {
      let ulElement = newItem.parentNode;
      let liElement = newItem;
      ulElement.removeChild(liElement);
    });
  }
}

lista.addEventListener("click", function (event) {
  const clickedElement = event.target;

  if (clickedElement.tagName === "LI") {
    clickedElement.classList.toggle("checked");
  } else if (clickedElement.tagName === "SPAN") {
    const listItem = clickedElement.parentElement;
    listItem.classList.remove("checked");
  }
});
