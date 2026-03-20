// Q16 – Accept name and age from the user. Check if the user is a valid voter or not. Also print years left for eligibility
// Difficulty: Medium | Topic: IF_ELSE

let name = prompt("Enter your name: ")
let age = Number(prompt("Enter your age: "))

let leftEligibility = 18 - age;

if (age> 18) {
    console.log(name, "You are eligble for vote ");
    
}else{
    console.log(name, ", You are not eligible fr vote, and ", leftEligibility ,"years left for eligiblity for vote");
    
}
