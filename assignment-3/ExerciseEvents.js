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

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

document.querySelector(".btn").setAttribute("diabled", "disabled");
let elmnt = document.getElementById("#registrationForm");
console.log(elmnt);
// const checkform = () => {
//   let elmnt = document.forms["form"];
//   console.log(elmnt);
//   var cansubmit = true;

//   for (var i = 0; i < f.length; i++) {
//     if (f[i].value.length == 0) cansubmit = false;
//   }

//   if (cansubmit) {
//     document.getElementById("submitbutton").disabled = false;
//   }
// };
// const register = document.querySelector(".button");

/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/

const button = document.querySelector(".btn");
console.log(button);
button.addEventListener("click", () => {
  alert("Registration succesful");
});
