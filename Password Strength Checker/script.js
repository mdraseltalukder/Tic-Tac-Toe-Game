const passwordInput = document.getElementById("password");
const output = document.getElementById("strengthMessage");
console.log(password, output);

password.addEventListener("input", function () {
  const password = passwordInput.value;
  if (password.length < 6) {
    output.innerText = "Very Weak";
    output.style.color = "red";
  } else if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/)) {
    output.innerText = "Medium";
    output.style.color = "orange";
  } else if (
    password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    )
  ) {
    output.innerText = "Strong";
    output.style.color = "green";
  } else {
    output.innerText = "Weak";
    output.style.color = "red";
  }
});
