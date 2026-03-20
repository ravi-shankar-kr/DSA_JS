// Q29 – Print the sum of all even & odd numbers in a range separately
// Difficulty: Easy | Topic: LOOPS

let firstNum = 10;
let secondNum = 20;

let evenSum = 0;
let oddSum  = 0;

for (let index = firstNum; index < secondNum; index++) {
    if (index %2 == 0) {
        evenSum += index;
        
    }else {
        oddSum += index
    } 
    
}

console.log(`sum of even num: ${evenSum}`);
console.log(`sum of odd num: ${oddSum}`);