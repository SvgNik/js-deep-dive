const accountProto = {
  getInfo: function () {
    return `${this.owner} ${this.balance}`;
  }
}

const account = Object.create(accountProto);
account.owner = 'Nik';
account.balance = 1000;

// нормальный вызов
console.log(account.getInfo());

// потеря this
const detached = account.getInfo;
console.log(detached());

// фикс через bind
const getOwnerInfo = account.getInfo.bind(account);
console.log(getOwnerInfo());
