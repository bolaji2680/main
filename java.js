const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')

const first = document.getElementById('first');
const last = document.getElementById('last');
const emailpop = document.getElementById('emailpop');
const pass = document.getElementById('pass');

form.addEventListener('submit', (e) =>{

    var email_check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(fname.value ==='' || fname.value== null ) {

    e.preventDefault();
    first.innerHTML = "You have not entered name";
}

else {
    first.innerHTML ="";
}

if(lname.value ==='' || lname.value== null ) {

    e.preventDefault();
    last.innerHTML = "Last name cannot be empty";
}

else {
    first.innerHTML ="";
}


if(!email.value.match(email_check)) {

    e.preventDefault();
    emailpop.innerHTML = "Email address cannot be empty";
}

else {
    emailpop.innerHTML ="";
}


// if(password.value.length <=5 ) {

//     e.preventDefault();
//     pass.innerHTML = "Your password is less than 5 chracters";
// }

// if(password.value.length >=15 ) {

//     e.preventDefault();
//     pass.innerHTML = "Your password is more than 15 chracters";
// }

if(password.value ==='' || password.value== null ) {

    e.preventDefault();
    pass.innerHTML = "Password cannot be empty";
}


})