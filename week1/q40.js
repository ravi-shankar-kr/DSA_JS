// Q40. Print 'hello' until user gives wrong input using do while
// 👉 Topic: do-while loop
// 👉 Level: Easy



let num;

do {
    num = Number(prompt("Enter a number (0 to stop): "));
    console.log("hello");
} while (num !== 0);