// Q19 – Accept a year and check if it is a leap year or not
// Difficulty: Easy | Topic: IF_ELSE

let year = Number(prompt("Enter year Num: "))

if ((year % 400 == 0) || ((year%4 == 0) && (year%100 != 0))) {
    console.log("leap year")
}else{
    console.log("not a leap year");
    
}