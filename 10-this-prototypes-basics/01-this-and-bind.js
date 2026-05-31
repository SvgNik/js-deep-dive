const account = {
  owner: 'Nik',
  getOwner: function () {
    return this.owner;
  }
}

// 1. нормальный вызов
console.log('Владелец аккаунта:', account.getOwner());

// 2. потеря this
const detached = account.getOwner;
console.log(detached());

// 3. фикс через bind
const getOwnerBound = account.getOwner.bind(account);
console.log(getOwnerBound());
