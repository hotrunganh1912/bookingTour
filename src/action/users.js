export function login() {
  return {
    type: "LOGIN"
  };
}
export function logOut() {
  return {
    type: "LOGOUT"
  };
}
export function recover(email) {
  return {
    type: "RECOVER",
    email
  }
}
