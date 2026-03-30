// Q50. Mirrored Right Triangle Pattern
// 👉 Topic: Pattern Printing
// 👉 Level: Easy



for (let i = 1; i <=  5; i++) {
    
    let row = ""
    for (let j = 5; j >= i; j--) {
         
        row = row + ""

        for (let k = 1; k <= i; k++) {
             row = row + "*"
            
        }
            
    }
    console.log(row);
    
}