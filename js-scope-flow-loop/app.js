console.log("Game started");

for (let i = 0; i < 10; i++) {
    let random = Math.round(Math.random() * 2);

    let number = parseInt(prompt("Please enter number:"));
    console.log(`${i} times.`);

    if (number === random) {
        console.log("Winner!");
    }
}
