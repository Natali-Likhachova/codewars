/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure
he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"] */

/* Link: https://www.codewars.com/kata/55b42574ff091733d900002f/javascript */

// Long Solution
function friend(friends){
    let result = [];

    friends.forEach(function(item, i, arr) {
        if(item.length == 4){
            result.push(item);
        }
    });

    return result;
}

// Short Solution
function friend(friends){
    return friends.filter(n => n.length === 4)
}