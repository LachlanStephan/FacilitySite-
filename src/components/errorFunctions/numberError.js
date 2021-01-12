// for number

export default function numberError() {
  const number = document.getElementById("number");
  const numberError = document.getElementById("numberError");

  if (number.value.length < 10 || number.value.length > 10) {
    numberError.style.display = "block";
  } else {
    numberError.style.display = "none";
  } 
}
