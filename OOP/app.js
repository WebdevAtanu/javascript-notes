// class with object and constructor
class form {
    submit(name) {
        console.log(`${name} is submitted the form`);
    }
    cancel(name) {
        console.log(`${name} is cancelled the form`);
    }
    constructor() {
        console.log("Constructor called");
    }
}
let obj1 = new form();
let obj2 = new form();
obj1.submit("atanu");
obj1.submit("ram");
obj2.cancel("atanu");
obj2.cancel("ram");

// inheritance
class animal {
    constructor(name, color) {
        this.givenName = name;
        this.givenColor = color;
    }
    running() {
        console.log(`${this.givenName} is ${this.givenColor} in color and it is running`)
    }
}

class newAnimal extends animal {
    shouting() {
        console.log(`${this.givenName} is ${this.givenColor} in color and it is shouting`)
    }
}

let monkey = new animal("Monkey", "brown"); //object of animal class
let tiger = new newAnimal("Tiger", "Orange"); //object of newAnimal class
monkey.running();
tiger.running();
tiger.shouting();


// method overriding
class employee {
    constructor(name) {
        this.givenName = name;
    }
    action(employee) {
        console.log(`I am ${this.givenName} and i am an ${employee}`)
    }
}

class coder extends employee {
    action(coding) {
        // super.action(); //it will run the parent action method.
        console.log(`I am ${this.givenName} and my job is ${coding}`)
    }
}

let employeeObj = new employee("Ram");
let coderObj = new coder("Sam");
employeeObj.action("employee");
coderObj.action("coding");