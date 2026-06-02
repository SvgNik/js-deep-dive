class Player {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  takeDamage(amount) {
    if (amount >= this.health) {
      this.health = 0;
    } else {
      this.health = this.health - amount;
    }
  }

  isAlive() {
    return this.health > 0;
  }
}

const nik = new Player('Nik', 100);
const bob = new Player('Bob', 100);

nik.takeDamage(30);
console.log(nik.health);
console.log(nik.isAlive());

bob.takeDamage(410);
console.log(bob.health);
console.log(bob.isAlive());
