// for message box

export default function messageError() {
  const msg = document.getElementById("txtArea");
  const msgError = document.getElementById("msgError");

  if (msg.value.length < 5) {
    msgError.style.display = "block";
  } else {
    msgError.style.display = "none";
  }
  if (msgError.style.display === "none") {
    msg.style.border = "2px solid #76EE00";
  } else {
    msg.style.border = "2px solid red";
  }
}
