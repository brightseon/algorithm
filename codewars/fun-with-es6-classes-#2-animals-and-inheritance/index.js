// Get Coding :)

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, 'shark', status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'cat', status);
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, 'dog', status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}

const billy = new Shark('Billy', 3, 'Alive and well');
console.log(billy.name);
console.log(billy.age);
console.log(billy.legs);
console.log(billy.species);
console.log(billy.status);
console.log(billy.introduce());

const charles = new Shark('Charles', 8, 'Finding a mate');
console.log(charles.name);
console.log(charles.age);
console.log(charles.legs);
console.log(charles.species);
console.log(charles.status);
console.log(charles.introduce());

const cathy = new Cat('Cathy', 7, 'Playing with a ball of yarn');
console.log(cathy.name);
console.log(cathy.age);
console.log(cathy.legs);
console.log(cathy.species);
console.log(cathy.status);
console.log(cathy.introduce());

const spitsy = new Cat('Spitsy', 6, 'sleeping');
console.log(spitsy.name);
console.log(spitsy.age);
console.log(spitsy.legs);
console.log(spitsy.species);
console.log(spitsy.status);
console.log(spitsy.introduce());

const doug = new Dog('Doug', 12, 'Serving his master', 'Eliza');
console.log(doug.name);
console.log(doug.age);
console.log(doug.legs);
console.log(doug.species);
console.log(doug.status);
console.log(doug.introduce());
console.log(doug.greetMaster());
