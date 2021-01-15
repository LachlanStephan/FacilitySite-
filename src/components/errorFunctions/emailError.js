// for email

export default function emailError() {
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  if (email.value.includes("@")) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  if (emailError.style.display === "none") {
    email.style.border = "2px solid #76EE00";
  } else {
    email.style.border = "2px solid red";
  }
}
