// Q49. Inverted Right Triangle Pattern
// 👉 Topic: Pattern Printing
// 👉 Level: Easy

for (let i = 1; i <=  5; i++) {
    
    let row = ""
    for (let j = 5; j >= i; j--) {
         
        row = row + "*"
            
    }
    console.log(row);
    
}