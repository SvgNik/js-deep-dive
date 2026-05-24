const users = [
  { name: "Alice", role: "admin", isActive: true },
  { name: "Bob", role: "user", isActive: false },
  { name: "Carol", role: "user", isActive: true },
];


function getActiveUsers(users) {
  const result = [];

  for (let user of users) {
    if (user.isActive) {
      result.push({
        name: user.name,
        role: user.role,
      });
    }
  }
  return result;
}

console.log(getActiveUsers(users));
