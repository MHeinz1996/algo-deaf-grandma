function deafGrandma() {
    let goodbye_count = 0;  // Initialize a counter so that we know how many times "GOODBYE!" has been said

    console.log("HEY KID!");

    while(goodbye_count < 2) {  // While loop that will continue as long as the goodbye_count is less than 2
        const prompt = require("prompt-sync")({ sigint: true });    // Allows node to get user input from terminal
        const x = prompt("> "); // Prompts the user for an input

        if(x === "") {  // If the user does not input anything...
            console.log("WHAT?!");  // logs "WHAT?!"
        } else {
            if(x !== x.toUpperCase()) { // if user input is not in all caps...
                console.log("SPEAK UP, KID!");  // tells user to speak up (type in caps)
            } else if (x === "GOODBYE!") {  // if the user says "GOODBYE!""...
                if(goodbye_count < 1) { // if "GOODBYE!" hasn't been said yet...
                    console.log("LEAVING SO SOON?");    // Respond with this line
                    goodbye_count++;    // Add a count to the goodbye_count so that we keep track of how many times "GOODBYE!" has been said
                } else {    // if "GOODBYE!" has been said before...
                    console.log("LATER, SKATER!");  // Repsond with this line
                    goodbye_count++;    // increment the goodbye_count
                }
            } else {    // If user input has substance and is in all caps
                console.log("NO, NOT SINCE 1946!"); //  repsond with this line
            }
        }

    }

}

deafGrandma();