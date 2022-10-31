//! using let const keyword
function getUser() {
  let username = "arafat-alim";
  let email = "Arafat.aman.alim@gmail.com";
  let password = "bhsdasabdu";

  return {
    email,
    username,
  };
}

console.log(getUser()); //{ email: 'Arafat.aman.alim@gmail.com', username: 'arafat-alim' }
console.log(getUser().email); // arafat.aman.alim@gmail.com
console.log(getUser().password); // undefined
console.log(getUser().username); // arafat-alim
