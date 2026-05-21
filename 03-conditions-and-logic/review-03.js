function getAccessLevel(role, isActive) {
  if (role === 'admin' && isActive) {
    return 'full access';
  } else if (role === 'user' && isActive) {
    return 'read only';
  } else {
    return 'no access';
  }
}

console.log(getAccessLevel('admin', true));
console.log(getAccessLevel('user', true));
console.log(getAccessLevel('user', false));
