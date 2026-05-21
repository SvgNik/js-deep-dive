function formatUsername(firstName, lastName, separator = '_'){
  return `${firstName}${separator}${lastName}`.toLowerCase();
}

console.log(formatUsername('Nik', 'Dear', '-'));
console.log(formatUsername('alice', 'Dear'));
console.log(formatUsername('JoHn', 'Dear', '%'));
