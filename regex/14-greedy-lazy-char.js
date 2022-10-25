//! Greedy  - means match longest possible string.
//! Lazy (?) - means match shortest possible string.

//! By default regex is greedy character
let string = "titanic";
let pattern = /t[a-z]*i/i; //greedy approach
let patternLazy = /t[a-z]*?i/;

let resultOne = string.match(pattern);
console.log(resultOne); //!  ['titani']

let resultTwo = string.match(patternLazy);
console.log(resultTwo); //! ['ti']

let text = "<h1>Winter is coming</h1>";
//! Greedy
let regexOne = /<.*>/;
let ansOne = text.match(regexOne);
console.log(ansOne); //! ['<h1>Winter is coming</h1>']
//! Lazy
let regexTwo = /<.*?>/;
let ansTwo = text.match(regexTwo);
console.log(ansTwo); //! ['<h1>']
