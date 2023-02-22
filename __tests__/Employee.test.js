/*
The first class is the Employee parent class with the following properties and methods: 

name

id

email

getName()

getId()

getEmail()

getRole() // Returns 'Employee'
*/ 

// JS calls the contructor method every time it creates a new instance/object of a class.
const tom = new Employee('Tom', '15863', 'tom@facebook.com');
console.log(tom.getName);
console.log(tom.getId);
console.log(tom.getEmail);
// The other 3 classes (Engineer, Intern, Manager) will be extended from the Employee class.

/* The describe method is a jest method for containg one or more tests.
it takes two arguments: a string for describing the test 
suite, and a callback function for wrapping the actual test */ 
// Remember, testing is a matter of INPUTS, FUNCTIONS, and expected OUTPUTS. 

// // Write the test block: 
// describe('*Describe the test here*', () => { 
//     it('*Here is the test requirement*', () => {
//         //actual test goes here.
        
//     });
// });