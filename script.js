const success = document.querySelector("#success");
const error = document.querySelector("#error");
const invalid = document.querySelector("#invalid");

const buttons = document.querySelectorAll("button");

const toastBox = document.querySelector(".toast-box");

const successMsg =
  '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Fix the error';
const invalidMsg =
  '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, try again';

function ShowNotification(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if(msg.includes("Invalid")){
    toast.classList.add("invalid")
  }

  setTimeout(() => {
    toast.remove()
  }, 6000)

}
