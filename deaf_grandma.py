def deaf_grandma():
    goodbye_count = 0   # initialize a counter to keep track of how many times "GOODBYE!" has been said
    
    print("HEY KID!")

    while(goodbye_count < 2):   # Loops while the counter is less than 2
        x = input('> ') # Requests user input

        if(x == ""):    # If the user does not input anything...
            print("WHAT?!") # Respond with this line
        else:   # If the user does input something...
            if(x.isupper() == False):   # If the input is not in all caps...
                print("SPEAK UP, KID!") # Respond with this line
            elif(x == 'GOODBYE!'):  # If the input is "GOODBYE!"...
                if(goodbye_count < 1): # and the goodbye_count is less than 1...
                    print("LEAVING SO SOON?")   # Respond with this line
                    goodbye_count += 1  # increment the counter
                else:   # If the goodbye_count is not less than 1...
                    print("LATER, SKATER!") # Respond with this line
                    goodbye_count += 1  # Increment the counter
            else:   # If input is in all caps...
                print("NO, NOT SINCE 1946!")    # Respond with this line




deaf_grandma()