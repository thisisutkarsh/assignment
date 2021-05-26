/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/
let input = document.querySelectorAll(".col");

const user = "<label for='username'> Username:</label";
const newPassword = "<label for='password'> Password:</label";
const newConfirm = "<label for='confirmPassword'> Confirm Password</label";
input[0].insertAdjacentHTML("beforebegin", user);
input[1].insertAdjacentHTML("beforebegin", newPassword);
input[2].insertAdjacentHTML("beforebegin", newConfirm);

// for (let i = 0; i < 3; i++) {

// }

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/

let rqrd = document.getElementsByTagName("input");
for (let i = 0; i < 3; i++) {
  rqrd[i].setAttribute("required", "");
}

/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/

document.getElementById("password").setAttribute("name", "password");
document
  .getElementById("confirmPassword")
  .setAttribute("name", "ConfirmPassword");

// Do below if you want to do onsubmit

// document.getElementById("registrationForm").setAttribute("onSubmit", "return validatePassword(this)");
// Function to check Whether both passwords
//  is same or not.
// function checkPassword(form) {
//   password1 = form.password1.value;
//   password2 = form.password2.value;

//  By adding event listener
const btn = document
  .querySelector(".btn")
  .addEventListener("click", validatePassword);

function validatePassword(pwd) {
  password = document.getElementById("password").value;
  confirmPassword = document.getElementById("confirmPassword").value;

  // If password not entered
  if (password == "") alert("Please enter Password");
  // If confirm password not entered
  else if (confirmPassword == "") alert("Please enter confirm password");
  // if not same return false
  else if (password != confirmPassword) {
    alert("\nPassword did not match: Please try again");
    return false;
  }

  // If same return True.
  else {
    alert("Registration succesful");
    return true;
  }
}

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

document.querySelector(".btn").setAttribute("disabled", "");

let change = document.querySelectorAll(".form-control");
for (let i = 0; i < 3; i++) {
  change[i].setAttribute("onblur", "checkForm()");
}

document.getElementById("username").setAttribute("name", "username");

function checkForm() {
  const pass = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmPassword").value;
  const username = document.getElementById("username").value;
  if (username != "" && pass != "" && confirmPass == pass) {
    document.querySelector(".btn").removeAttribute("disabled");
  }
}

/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/

// Done with just one code in exercise 3
