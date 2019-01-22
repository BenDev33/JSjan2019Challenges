// Make separate HTML, CSS, and JS files, and link files. In HTML, create a sign up form that takes in three values, username, password, and confirm password.  



// This should alert the user if they hit submit without all of the fields filled in, saying, "Please fill in all your fields".  It should also check the password and, if they do not match, the user should be alerted with "Your passwords MUST match". If all of the fields are filled in, and the passwords match, when the submit button is clicked, the button should become disabled.
let username = document.getElementById("username");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");
let form = document.getElementById("myform");


form.addEventListener('submit', submit);

function submit(e) {  
    e.preventDefault();
    if (username.value === "" || password.value === "" || cpassword === "") {
        alert("Please fill in all your fields");
        return false;
    } else if (password.value !== cpassword.value) {
        alert("Your passwords must match");
        return false;
    }   else {
        return true;
    }
    };
