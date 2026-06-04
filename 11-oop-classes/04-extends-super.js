class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    return `${this.name} says ${this.sound}`;
  }
}

class Dog extends Animal {
  constructor(name, sound, breed) {
    super(name, sound);
    this.breed = breed;
  }
  fetch() {
    return `${this.name} fetches the ball`;
  }
}

const newDog = new Dog('Rex', 'Gaf', 'Pit bul');

console.log(newDog.makeSound());
console.log(newDog.fetch());
console.log('Dog breed:', newDog.breed);
