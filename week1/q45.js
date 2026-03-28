// Q45. Project - Restaurant v1.0
// 👉 Topic: Mini Project, Menu Logic
// 👉 Level: Medium



 let choice = 0;
let quantity;
let total = 0;

while (choice !== 4) {

    choice = Number(prompt(
        "Menu:\n1. Pizza - 200\n2. Burger - 100\n3. Pasta - 150\n4. Exit\nEnter your choice:"
    ));

    if (choice >= 1 && choice <= 3) {

        quantity = Number(prompt("Enter quantity: "));

        switch (choice) {
            case 1:
                total += 200 * quantity;
                break;
            case 2:
                total += 100 * quantity;
                break;
            case 3:
                total += 150 * quantity;
                break;
        }

        console.log("Item added ");

    } else if (choice === 4) {
        console.log("Thank you for ordering ");
    } else {
        console.log("Invalid choice ");
    }
}


// do {
//     choice = Number(prompt("  DISPLAY menu:1. Pizza - 200, 2. Burger - 100, 3. Pasta - 150, 4. Exit   choose menu item between 1-3 and exit for 4 "))

//     quantity = Number(prompt("Enter quantity: "))

//     switch (choice) {
//         case 1:
//             total = total + (200 *quantity)
//             break;
//         case 2:
//             total = total + (200 *quantity)
//             break;
//         case 3:
//             total = total + (200 *quantity)
//             break;
//         default:
//             break;
//     }

//     if (choice !== 4) {
//         console.log("Thank you");
//     }else{
//          console.log("invalid menu")
//     }
// } while (choice || quantity !== 4);

let finalbill =  total + (total* 18)/100;
console.log(`final bill is ${finalbill}`);
