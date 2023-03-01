// Require the Employee class 
const Employee = require('./Employee');
// Create a new class instance inherited from the Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email) 
        this.name = name;
        this.id = id; 
        this.email = email;
        this.school = school; 
        this.role = 'Intern';
    }

    getSchool() {
        return this.school; 
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern; 