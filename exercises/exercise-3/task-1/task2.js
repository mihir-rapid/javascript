// 2. Write​ ​ a ​​ JavaScript​ ​ function​ ​ to​ ​ hide​ ​ email​ ​ addresses​ ​ to​ ​ protect​ ​ from​ ​ unauthorized​ ​ user. The number of star will be equal to the number of characters hidden, and make this program dynamic.



function hideEmail() {
    let email = 'mihir.menon@rapidops.co';
    console.log(email);
    
    [username, domain] = email.split('@');

    username = username.charAt(0) + '*'.repeat(username.length-2) + username.slice(-1);

    email = username + domain;

    console.log(email);
}

hideEmail();