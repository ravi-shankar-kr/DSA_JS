// Q44. Project - Guess Game
// 👉 Topic: Mini Project, Logic Building
// 👉 Level: Medium

let randomNum = Math.floor(Math.random() * 100)
// console.log(randomNum);

let guess;

do {
    guess = Number(prompt("Enter a num you want to guess: "));

    if (guess > randomNum) {
        console.log("too high");
    }if (guess< randomNum) {
        console.log("too low")
    } else {
        console.log("congratulations correct guess: ", guess)
    }
} while (randomNum !== guess);
