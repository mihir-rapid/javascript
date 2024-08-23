/*

class Admin {
    description = "admin"
    constructor() {
        console.log(this.description)
    }
}

class User extends Admin {
    description = "user"
}

new Admin() // admin
new User()  // admin
// ** problem   */


// ** solution
class Admin {
    description() {
        console.log("admin");
    }
    constructor() {
        this.description()
    }
}

class User extends Admin {
    description() {
        console.log("user")
    }
}

new Admin() // admin
new User()  // user