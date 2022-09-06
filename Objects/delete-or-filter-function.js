//! Function to filter out object

let user = {
  first: "Arafat",
  middle: "Aman",
  last: "ALim",
};

console.log(user); //{ first: 'Arafat', middle: 'Aman', last: 'ALim' }

function filterObj(obj, props) {
  let filter = {};
  Object.keys(obj)
    .filter((x) => x !== props)
    .map((key) => (filter[key] = obj[key]));
  return filter;
}

console.log(filterObj(user, "first")); //{ middle: 'Aman', last: 'ALim' }
