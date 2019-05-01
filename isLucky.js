/*Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.*/

function isLucky(n) {
    let sum1 = 0, sum2 = 0;
    let str = n.toString();
    let half = str.length / 2;

    for (let i = 0; i < half; i++){
         sum1 = sum1 + parseInt(str[i]);
    }
    
    for (let j = half; j < str.length; j++){
         sum2 = sum2 + parseInt(str[j]);
    }
    
    if (sum1 == sum2){
        return true;
    }
    else return false;
}