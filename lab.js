//Grabs HTML elements
let btn = document.querySelector('#btn');
//Array of names
let names = ['Laura', 'Eyke', 'April', 'Echu', 'Jonathan'];
//Sorts the names array
function sortNames() {
  let sorted =  names.sort().join(', ');
  ourNames.innerHTML = sorted;
}
//sortNames as a Callback
btn.addEventListener('click', sortNames);

// setTimeout(myFunction, 3000);
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Good Morning !!";
// }