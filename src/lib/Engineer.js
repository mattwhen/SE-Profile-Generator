const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHubUserName = gitHubUserName; 
        this.role = 'Engineer';
    }
}