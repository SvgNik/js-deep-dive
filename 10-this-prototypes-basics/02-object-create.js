const personProto = {
  describe: function () {
    return `${this.name} ${this.role}`;
  }
}

const nik = Object.create(personProto);
nik.name = 'Nik';
nik.role = 'admin';

const max = Object.create(personProto);
max.name = 'Max';
max.role = 'user';

console.log(nik.describe());
console.log(max.describe());
console.log(nik.hasOwnProperty('describe'));
