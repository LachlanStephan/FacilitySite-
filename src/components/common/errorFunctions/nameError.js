// for name

export default function nameError() {
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");

  if (name.value.length < 3) {
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
  }
}
