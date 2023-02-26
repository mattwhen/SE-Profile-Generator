// Import the Employee class
const Employee = require('./Employee');
// Create a new class instance from the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber, list) {
        super(name, id, email)
        this.name = name;
        this.id = id; 
        this.email = email;
        this.officeNumber = officeNumber;
        this.list = list;
        this.role = 'Manager';
    } 

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return this.role;
    }
};

// Export the Manager class
module.exports = Manager; 