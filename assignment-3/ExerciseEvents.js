/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/
let input = document.querySelectorAll(".col");

const newLabel = "<label></label>";
for (let i = 0; i < 3; i++) {
  input[i].insertAdjacentHTML("afterbegin", newLabel);
}

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

// Do below if you want to set attribute and then move forward
// document
//   .getElementById("registrationForm")
//   .setAttribute("onSubmit", "return validatePassword(this)");
// Function to check Whether both passwords
//  is same or not.
// function checkPassword(form) {
//   password1 = form.password1.value;
//   password2 = form.password2.value;


//  By adding event listener
const btn = document.querySelector(".btn").addEventListener("click", validatePassword);

function validatePassword(pwd) {
  password = document.getElementById("password").value;
  confirmPassword = document.getElementById("confirmPassword").value
  console.log(password);

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
    alert("Password Matched: Welcome!");
    return true;
  }
}



/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

// document.querySelector(".btn").setAttribute("disabled", "disabled");

document.getElementById("registrationForm").setAttribute("onSubmit", "return checkForm(this)");


let elmnt = document.getElementById("#registrationForm");
// console.log(elmnt);
// document.querySelectorAll(".form-control").forEach((element) => {
//   element.setAttribute("onclick", "checkForm()");
// });

const checkform = () => {
  let elmnt = document.forms["form"];
  console.log(elmnt);
  var cansubmit = true;

  for (var i = 0; i < f.length; i++) {
    if (f[i].value.length == 0) cansubmit = false;
  }

  if (cansubmit) {
    document.getElementById("submitbutton").disabled = false;
  }
};
const register = document.querySelector(".button");

/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/

// const button = document.querySelector(".btn");
// button.addEventListener("click", () => {
//   alert("Registration succesful");
// }, true);