export const USERS = [
  { id: 1, username: "ali",   password: "ali123",   displayName: "Ali Rida" },
  { id: 2, username: "sajid", password: "sajid123", displayName: "Sajid" },
  { id: 3, username: "admin", password: "admin",    displayName: "Admin" },
  { id: 4, username: "demo",  password: "demo",     displayName: "Demo User" },
];

export function findUser(username, password) {
  return USERS.find(
    (u) =>
      u.username.toLowerCase() === username.toLowerCase() &&
      u.password === password
  ) || null;
}
