//! FInd out the criminal in a given hunt (string)

let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let pattern = /C+/;
let result = crowd.match(pattern);
console.log(result); //! ['CCC']
