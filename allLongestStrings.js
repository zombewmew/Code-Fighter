/*Given an array of strings, return another array containing all of its longest strings.*/

function allLongestStrings(inputArray) {
    let max  = 0;
    let longestsStr = [];
    
    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i].length > max){
            max = inputArray[i].length;
        }
    }

    for (let j = 0; j < inputArray.length; j++){
        if (inputArray[j].length == max){
           longestsStr.push(inputArray[j]);
        }
    }

    return longestsStr;
}