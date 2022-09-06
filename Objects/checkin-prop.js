//! Checkin object property

let person = {
  name: "Arafat",
  address: {
    city: "kolkata",
    state: "WB",
  },
};

// let property = 'name' in person //true
// let property = 'address' in person //true
// let property = 'city' in person //false
// let property = 'city' in person.address // true
// let property = 'state' in person.address // true
let property = "constructor" in person.address; // true
// let property1 = 'hasOwnProperty' in person.address // true
let property1 = "toString" in person.address; // true
console.log(property);
console.log(property1);

//! SO the best way to know the property of an object is to use "hasOwnProperty()"

// let newProp = person.hasOwnProperty('name'); //true
// let newProp = person.hasOwnProperty('address'); //true
// let newProp = person.address.hasOwnProperty('state'); //true
// let newProp = person.address.hasOwnProperty('city'); //true
let newProp = person.address.hasOwnProperty("constructor"); //false
console.log(newProp);
