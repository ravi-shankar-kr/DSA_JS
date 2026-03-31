//  Q51. Triangle Pattern
// 👉 Topic: Pattern Printing
// 👉 Level: Easy


let n =4;

for (let i = 1; i <= n; i++) {
    let row = ""

    for (let j = 1; j <= n-i; j++) {
         row += " " 
        
    }

    for (let k = 1; k <= i; k++) {
        row += "# "
        
    }

    console.log(row);
    
    
}