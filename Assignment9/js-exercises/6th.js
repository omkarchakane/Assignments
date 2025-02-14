const person = {
    name: "Alice",
    age: 25,
    occupation: "Engineer"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old and I work as a ${obj.occupation}.`);
}

greetPerson(person);
