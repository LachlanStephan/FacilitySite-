// for surname

export default function surnameError() {
  const surname = document.getElementById("surname");
  const surnameError = document.getElementById("surnameError");

  if (surname.value.length < 3) {
    surnameError.style.display = "block";
  } else {
    surnameError.style.display = "none";
  }
}
