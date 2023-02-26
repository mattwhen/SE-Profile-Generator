const Employee = require('./Employee');
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
        return `This is my GitHub username: ${this.gitHubUserName}`;
    }

    getRole() {
        return this.role; 
    }
}

// Export Engineer class
module.exports = Engineer; 