let input = "Go go Goa, Goa Is on. Go goa gone";

let pattern = /go/g; //! by adding global flag repeated word will starts found
let resultOne = input.match(pattern);

console.log(resultOne); // [ 'go', 'go', 'go' ]

let patternInsensitive = /go/gi; // ignore case insensitve
let resultTwo = input.match(patternInsensitive);

console.log(resultTwo); //[ 'Go', 'go', 'Go', 'Go', 'Go', 'go', 'go' ]
