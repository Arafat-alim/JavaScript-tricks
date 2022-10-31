//! we can protect our data using let, const and var
{
  let name = "Arfat";
  let email = "arafat@gmail.com";
  let password = "adhisagbdhasi";

  var result = () => {
    return { name, email };
  };
}

console.log(result().name); //  Arfat
console.log(result().email); // arafat@gmail.com
console.log(result().password); // undefined
