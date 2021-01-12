// for message box

export default function messageError() {
  const msg = document.getElementById("msg");
  const msgError = document.getElementById("msgError");

  if (msg.value.length < 5) {
    msgError.style.display = "block";
  } else {
    msgError.style.display = "none";
  }
}
