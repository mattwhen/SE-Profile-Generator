// JS calls the contructor method every time it creates a new instance/object of a class.
// The other 3 classes (Engineer, Intern, Manager) will be extended from the Employee class.
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id; 
        this.email = email;
    }
    // These methods will also be available to other classes once the class is exported.
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
};
// Export the Employee class 
module.exports = Employee;