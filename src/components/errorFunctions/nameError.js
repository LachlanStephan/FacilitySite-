// for name

export default function nameError() {
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");

  if (name.value.length < 3) {
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
  if (nameError.style.display === "none") {
    name.style.border = "2px solid #76EE00";
  } else {
    name.style.border = "2px solid red";
  }
}
