// for number

export default function numberError() {
  const number = document.getElementById("number");
  const numberError = document.getElementById("numberError");
  const int = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (
    number.value.length < 10 ||
    number.value.length > 10 ||
    number.value.includes(int)
  ) {
    numberError.style.display = "block";
  } else {
    numberError.style.display = "none";
  }
  if (numberError.style.display === "none") {
    number.style.border = "2px solid #76EE00";
  } else {
    number.style.border = "2px solid red";
  }
}
