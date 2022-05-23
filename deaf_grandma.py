def deaf_grandma():
    goodbye_count = 0
    
    print("HEY KID!")

    while(goodbye_count < 2):
        x = input('> ')

        if(x == ""):
            print("WHAT?!")
        else:
            if(x.isupper() == False):
                print("SPEAK UP, KID!")
            elif(x == 'GOODBYE!'):
                if(goodbye_count < 1):
                    print("LEAVING SO SOON?")
                    goodbye_count += 1
                else:
                    print("LATER, SKATER!")
                    goodbye_count += 1
            else:
                print("NO, NOT SINCE 1946!")




deaf_grandma()