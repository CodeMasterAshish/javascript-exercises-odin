const birthYear = 2003;
const thisYear = 2026;
const firstName = "Ashish";
const lastName = "Jha";

const greeting = "Namaste! Mera Naam hai " + firstName + " "+ lastName + " or mein  " + (thisYear - birthYear) + " saal ka hu."; 
console.log(greeting);



// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
