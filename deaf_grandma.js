function deafGrandma() {
    let goodbye_count = 0;

    console.log("HEY KID!");

    while(goodbye_count < 2) {
        const prompt = require("prompt-sync")({ sigint: true });
        const x = prompt("> ");

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