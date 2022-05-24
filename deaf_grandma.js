function deafGrandma() {
    let goodbye_count = 0;  

    console.log("HEY KID!");

    while(goodbye_count < 2) {  
        const prompt = require("prompt-sync")({ sigint: true });    // Allows node to get user input from terminal
        const x = prompt("> "); // Prompts the user for an input

        if(x === "") { 
            console.log("WHAT?!"); 
        } else {
            if(x !== x.toUpperCase()) { 
                console.log("SPEAK UP, KID!"); 
            } else if (x === "GOODBYE!") {  
                if(goodbye_count < 1) { 
                    console.log("LEAVING SO SOON?");    
                    goodbye_count++;    
                } else {   
                    console.log("LATER, SKATER!");  
                    goodbye_count++;   
                }
            } else {   
                console.log("NO, NOT SINCE 1946!"); 
            }
        }

    }

}

deafGrandma();