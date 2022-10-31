const users = [
  { name: "Arafat", city: "Kolkata" },
  { name: "Asif", city: "Hyderabad" },
  { name: "Ahmed", city: "Bangalore" },
  { name: "Aquib", city: "Chennai" },
  { name: "Afia", city: "Pune" },
  { name: "ganesh", city: "Mumbai" },
];

//! we use for of loop for iteration
//! suppose i want to store the information whose lived in the Kolkata
let calcatians;
for (let user of users) {
  if (user.city === "Kolkata") {
    calcatians = user;
    break;
  }
}
//! break  -- condition match hua, loops top hojyga

console.log(calcatians); //{ name: 'Arafat', city: 'Kolkata' }
