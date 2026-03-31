// Q52. V Pattern
// 👉 Topic: Pattern Printing
// 👉 Level: Easy

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = ""

    for (let j = 1; j <= n-i; j++) {
         row += " *" 
    }
 
    // for (let j = 1; j <= ((2 * n - 1) - (2 * i)); j++) {
    //    row += "* "
        
    // }
    console.log("*");
    
    // console.log(row);
    
    
}