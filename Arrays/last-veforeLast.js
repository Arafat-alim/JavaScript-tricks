//! get the last element in array
let names = ["Arafat", "Alim", "google", "Mohan", "GOvind"];
console.log(names[names.length - 1]); // Govind

//! Get Last Item Everything Before in Array
//! 1st MEthod
let beforelast = names.slice(0, names.length - 1);
console.log(beforelast); // [ 'Arafat', 'Alim', 'google', 'Mohan' ]

//! 2nd Method
let beforeLast2 = names.slice(0, -1);
console.log(beforeLast2); // [ 'Arafat', 'Alim', 'google', 'Mohan' ]
