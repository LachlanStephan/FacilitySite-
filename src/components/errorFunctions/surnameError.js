// for surname

export default function surnameError() {
  const surname = document.getElementById("surname");
  const surnameError = document.getElementById("surnameError");

  if (surname.value.length < 3) {
    surnameError.style.display = "block";
  } else {
    surnameError.style.display = "none";
  }
  if (surnameError.style.display === "none") {
    surname.style.border = "2px solid #76EE00";
  } else {
    surname.style.border = "2px solid red";
  }
}
