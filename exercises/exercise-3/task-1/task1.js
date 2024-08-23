// 1. Write​ ​ a ​​ pattern​ ​ that​ ​can identify an​ ​ e-mail​ ​ address.



function identifyEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@+[a-zA-Z0-9.-]+\.+[a-zA-Z]{2,}$/
    return emailPattern.test(email);
}

let email = 'mihir.menon@rapidops.co';
let verfifyEmail = identifyEmail(email);

if (verfifyEmail == true) {
    console.log('email is verified');
} else {
    console.log('email is not verified');
}