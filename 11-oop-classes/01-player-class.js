class Player {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  takeDamage(amount) {
    this.health -= amount;
  }
}

const nik = new Player('Nik', 100);
const bob = new Player('Bob', 100);

nik.takeDamage(30);

console.log('Nik:', nik.health);
console.log('Bob:', bob.health);
