const togglePw = document.getElementById("password");
const submitButton = document.getElementById("submit");

submitButton.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    submitButton.innerHTML = "Hide Password";
  } else {
    password.type = "password";
    submitButton.innerHTML = "Show Password";
  }
};
