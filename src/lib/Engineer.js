// Require the Employee class
const Employee = require('./Employee');
// Create a new class instance inherited from the Employee class
class Engineer extends Employee {
    constructor(name, id, email, gitHubUserName) {
        super(name, id, email)
        this.name = name;
        this.id = id;
        this.email = email;
        this.gitHubUserName = gitHubUserName; 
        this.role = 'Engineer';
    }

    getGitHub() {
        return this.gitHubUserName;
    }

    getRole() {
        return this.role; 
    }
}

// Export Engineer class
module.exports = Engineer; 