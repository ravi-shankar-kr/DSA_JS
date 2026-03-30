// Q48. Right Triangle - Alphabet Pattern
// 👉 Topic: Pattern Printing
// 👉 Level: Easy

for (let i = 1; i <= 5; i++) {

    let alphabet = ""
    for (let j =1; j <= i; j++) {
        alphabet +=  String.fromCharCode(64+j)
    }

    console.log(alphabet);
}