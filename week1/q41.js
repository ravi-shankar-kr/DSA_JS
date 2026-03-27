// Q41. Make a choice based calculator using do while
// 👉 Topic: do-while, Switch/Conditions
// 👉 Level: Easy

let choice ;

do {
    
    choice = Number(prompt("Enter your num 1-5  (the choice is Add, sub, multiply, divide to stop enter 5) "));

    let num1 = Number(prompt("Enter num1: "));
    let num2 = Number(prompt("Enter num2: "));

    switch (choice) {
        case 1:
            let add = num1 + num2;
            console.log("add: ", add);
            break;
        case 2:
            let sub = num1 -num2;
            console.log("sub: ", sub);
            break;
        case 3:
            let multiply = num1 * num2;
            console.log("Multiply: ", multiply);
            break;
        case 4:
            let divide = num1 / num2;
            console.log("Divide: ", divide);
            break;
    
        default:
            console.log("invalid choice");
            break;
    }

} while (choice !== 5);