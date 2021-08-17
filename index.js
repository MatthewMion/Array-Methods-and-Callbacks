const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
const get2014 = fifaData.filter(function(item){
    return item.Year === 2014 && item.Stage === 'Final' 
})
// console.log(get2014)
// //(a) Home Team name for 2014 world cup final
// const homeTeamNameFinals = get2014[0]['Home Team Name']
// console.log(homeTeamNameFinals);
// //(b) Away Team name for 2014 world cup final
// const awayTeamNameFinals = get2014[0]['Away Team Name']
// console.log(awayTeamNameFinals);
// //(c) Home Team goals for 2014 world cup final
// const homeTeamGoalsFinal = get2014[0]['Home Team Goals']
// console.log(homeTeamGoalsFinal)
// //(d) Away Team goals for 2014 world cup final
// const awayTeamGoalsFinal = get2014[0]['Away Team Goals']
// console.log(awayTeamGoalsFinal)
// //(e) Winner of 2014 world cup final */
// const winnerFinal = get2014[0]['Win conditions']
// console.log(winnerFinal)


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/


function getFinals(array){
    return array.filter(function(item){
        return item.Stage === 'Final'})
 }




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(array, getFinalscb) {
 const finalsArray = getFinalscb(array)
 const years = finalsArray.map(function(game){
     return game.Year;
 })
    return years;

// return getFinalscb(array).map(game => game.Year)
        

}
// console.log(getYears(fifaData, getFinals))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 
//probably use .map() over the getFinals and return the winners using a conditional.
//dont worry about ties or overtime, just return winner based on the points scored in the game.

function getWinners(array, getFinalscb) {
    const finalsArray = getFinalscb(array);
    const winnersArray=[]
    for(let i = 0; i < finalsArray.length; i++){
        if(finalsArray[i]['Home Team Goals'] > finalsArray[i]['Away Team Goals']){
           winnersArray.push(finalsArray[i]['Home Team Name'])
        } else {
           winnersArray.push(finalsArray[i]['Away Team Name'])
        }
    }
    
    return winnersArray;
}
// console.log(getWinners(fifaData,getFinals))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 
hint: the strings returned need to exactly match the string in step 4.
 */
// 3 params, getYearscb, getWinnerscb
function getWinnersByYear(array, getYearscb, getWinnerscb) {
    const yearsArray = getYearscb(array, getFinals);
    const winnersArray= getWinnerscb();
    const winnersByYear = yearsArray.map(function(year, index){
            return `In ${year}, ${winnersArray[index]} won the world cup!`
    })
        // const winnersByYear = [];
        // for(let i = 0; i < yearsArray.length;i++){
        //      winnersByYear.push(`In ${yearsArray[i]}, ${winnersArray[i]} won the world cup!`);
        // }

    return winnersByYear;
}
// console.log(getWinnersByYear(fifaData, getYears, getWinners))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(finalArray) {
   const scoreArray = finalArray.reduce((accumulator, currentValue) => {
      return  accumulator + currentValue['Home Team Goals'] + currentValue['Away Team Goals']}, 0)/finalArray.length

      return scoreArray.toFixed(2);

//    const reducer = (accumulator, currentValue) => accumulator + currentValue;
//     console.log(scoreArray.reduce(reducer, 0))
}




/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
