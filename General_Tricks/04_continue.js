//! continue keyword - WHenever our condition match then it exlude the match one and again move into
//! the loop started again

//! We can use this feature to filter out the elements from the array object
const users = [
  { name: "Arafat", city: "Kolkata" },
  { name: "Rahman", city: "Kolkata" },
  { name: "Aman", city: "Kolkata" },
  { name: "Asif", city: "Hyderabad" },
  { name: "Ahmed", city: "Bangalore" },
  { name: "Aquib", city: "Chennai" },
  { name: "Afia", city: "Pune" },
  { name: "ganesh", city: "Mumbai" },
];

//! filter out the city - Remove kolkata data from the given data
let filtered = [];
for (let user of users) {
  if (user.city === "Kolkata") {
    continue;
  }
  filtered.push(user);
}

console.log(filtered);
/*
[ { name: 'Asif', city: 'Hyderabad' },
  { name: 'Ahmed', city: 'Bangalore' },
  { name: 'Aquib', city: 'Chennai' },
  { name: 'Afia', city: 'Pune' },
  { name: 'ganesh', city: 'Mumbai' } ]

*/
