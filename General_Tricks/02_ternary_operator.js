const apiCall = "https://jsonplaceholder.typicode.com/users/1";
let body = document.querySelector("body");
fetch(apiCall)
  .then((res) => res.json())
  .then((data) => configureApi(data));
//   .then((data) => console.log({data}));

//   console.log(Data)

function configureApi({ name, phone, username, email }) {
  body.innerHTML = `
<div>My Name is ${name}</div>
<div>My Phone Number is ${phone}</div>
<div>Your Username is ${username}</div>
<div>Your Username is ${email ? "Null" : "Your Email"}</div>
`;
}
