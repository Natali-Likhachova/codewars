/*Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions.
Complete the goals function to return his total goals (the sum) for all three leagues.

Note: the parameter for this function will always be a valid number.

Ex :

goals(5,10,2) == 5+10+2 = 17*/

/* Link: https://www.codewars.com/kata/55f73be6e12baaa5900000d4 */

// Long Solution
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    var sum;
    sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    return sum;
}

// Short Solution
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
