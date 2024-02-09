class Animal {
    name = 'Animal'

    constructor() {
        console.log(this.run());
    }

    run() {
        console.log(`${this.name} runs`)
    }
}

class Rabbit extends Animal {
    name = 'rabbit';

    run() {
        console.log(`${this.name} runscdascsa`)
    }
}

// const rabbit = new Rabbit();

// const b = function abc() {
//     console.log(abc);
// }

// b();
// console.log(this);

function testThis(){
    console.log(this);
}
testThis()

const arrFn = () => {
    console.log(this);
}
// arrFn();