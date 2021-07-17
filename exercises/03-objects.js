// Reference Type
const object1 = { value: 10 };
const object2 = object1; // Has the same refence that object1
const object3 = { value: 10 };

// Context VS Scope
function scope(){
    let a = 4;
    console.log('Inside', a);
}
// console.log(global);
// console.log('Outside', a);

// Context tells you where we are within the object
// console.log(this);

// Instantiation
// Make a copy of an Object and reuse the code
class Player {
    constructor(name, type){
        console.log('Player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi! I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type){
        super(name, type);
        console.log('Wizard', this);
    }
    attack() {
        console.log('Fire Ball');
    }
} 

const Rafael = new Wizard('Rafael', 'Samurai');
const Rafael2 = new Player('Rafael', 'Samurai');

// Rafael.attack();
// Rafael2.attack(); // This method doesn't exist into Player Class but it does into Wizard Class