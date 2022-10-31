//! Round decimal to  integers to
//! Three things we have to achieve the above things

//! Math.floor() - Lower Bound
console.log(Math.floor(1.6));
console.log(Math.floor(1.1));
console.log(Math.floor(-1.6));

//! Math.ceil() - Upper Bound
console.log(Math.ceil(1.6)); //2
console.log(Math.ceil(1.4)); //2
console.log(Math.ceil(-1.6)); //-1

//! Math.round() - Both
console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1
console.log(Math.round(-1.4)); //-1
console.log(Math.round(-1.6)); //-2
