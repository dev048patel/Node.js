/*
const person = {
    name : 'John Doe',
    age: 30,
};
*/

// Class
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// To export the person object
export default Person;