const golden = () => {
    console.log("this is golden!!")
}
   
golden()

console.log("===================================")

const newFunction = (firstName, lastName) => {
    
const obj = {
    firstName,
    lastName,
    fullName: () => {
        return console.log(`${firstName} ${lastName}`)
        }
}

return obj
}
   
  //Driver Code
const person = newFunction("William", "Imoh");
console.log(person);
person.fullName();  
  
  //Output
  /*{
    firstName: 'William',
    lastName: 'Imoh',
    fullName: [Function: fullName]
  }
  William Imoh*/ 

console.log("===================================")

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation} = newObject

console.log(firstName, lastName, destination, occupation)

console.log("===================================")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

console.log("===================================")

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
 
// Driver Code
console.log(before) 