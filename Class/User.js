class User{
    constructor(userName,pwd){
        this.userName=userName;
        this.password = pwd;
        this.email = "";
        this.courses = [];
    }
}

module.exports = User;