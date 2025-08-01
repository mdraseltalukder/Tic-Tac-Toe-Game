const input = document.getElementById("input");
const submit = document.getElementById("submit");
const todoList = document.getElementById("lists");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const inputVal = input.value.trim();

  if (inputVal === "") {
    alert("Please enter a task");
    return;
  }

  // list item
  const list_item = document.createElement("div");
  list_item.classList.add("list-item");

  // input
  const list_input = document.createElement("input");
  list_input.classList.add("list-input");
  list_input.setAttribute("readonly", "readonly");
  list_input.value = inputVal;

  // buttons container
  const list_btns = document.createElement("div");
  list_btns.classList.add("buttons");

  // edit
  const edit_btn = document.createElement("button");
  edit_btn.classList.add("edit");
  edit_btn.innerText = "Edit";

  // delete
  const delete_btn = document.createElement("button");
  delete_btn.classList.add("delete");
  delete_btn.innerText = "Delete";

  // append
  list_btns.appendChild(edit_btn);
  list_btns.appendChild(delete_btn);
  list_item.appendChild(list_input);
  list_item.appendChild(list_btns);
  todoList.appendChild(list_item);

  // reset input
  input.value = "";

  Delete(inputVal);
  Edit(list_input, edit_btn);

  // optional: add edit/delete functionality later
});

const Delete = (val) => {
  const delete_btns = document.querySelectorAll(".delete");
  delete_btns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const list_item = this.parentElement.parentElement;
      todoList.removeChild(list_item);
    });
  });
};
const Edit = (list_input, edit_btn) => {
  edit_btn.addEventListener("click", function () {
    console.log("clicked");

    if (edit_btn.innerText === "Edit") {
      list_input.removeAttribute("readonly");
      list_input.focus();
      edit_btn.innerText = "Save";
    } else {
      list_input.setAttribute("readonly", "readonly");
      edit_btn.innerText = "Edit";
    }
  });
};
