/*You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.*/

function arrayChange(inputArray) {
    var k = 0;

    for (var i = 0; i < inputArray.length; i++){
       var left = inputArray[i]
       var right = inputArray[i+1]
       if (left >= right){
          var mov = left - right +1;
          inputArray[i+1] += mov;
          k += mov;
       }
    }
    return k;
 }