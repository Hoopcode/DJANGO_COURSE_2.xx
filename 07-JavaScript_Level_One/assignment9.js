let firstName = prompt("Please enter First Name");
let lastName = prompt("Please enter Last Name");
let personAge = prompt("Please enter your age");
let personHeight = prompt("Please enter your height");
let petName = prompt("Please enter your pets name");

if (firstName[0].toLowerCase() === lastName[0].toLowerCase()) {
  if ((personAge > 20) && (personAge < 30)) {
    if (personHeight >= 170) {
      if ((petName[petName.length-1])==="y") {
        console.log("you are a spy!!!");
      }
    }
  }
}
