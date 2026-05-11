function createUsername(name, role = 'user') {
  return name + " [" + role + "]";
}

console.log(createUsername('Nik'));
console.log(createUsername('Nik', 'admin'));
console.log(createUsername('Alik', 'Editor'));
