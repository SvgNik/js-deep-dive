class Battery {
  constructor(name, charge) {
    this.name = name;
    this.charge = charge;
  }

  use(amount) {
    if (amount >= this.charge) {
      this.charge = 0;
    } else {
      this.charge = this.charge - amount;
    }
  }

  needsCharging() {
    return this.charge < 20;
  }
}

const phone = new Battery('galaxy', 100);
const tablet = new Battery('ipad', 100);

phone.use(30);
console.log("phone charge:", phone.charge);
console.log(phone.needsCharging());

tablet.use(90);
console.log("tablet charge:", tablet.charge);
console.log(tablet.needsCharging());

phone.use(200);
console.log("phone charge:", phone.charge);
console.log(phone.needsCharging());
