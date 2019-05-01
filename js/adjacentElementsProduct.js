/*Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.*/

function adjacentElementsProduct(inputArray) {
    
    var adj;
    var maxadj = -1000; 
    
    for (var i = 0; i <= 10; i++){
          adj = inputArray[i] * inputArray[i+1];
          if (maxadj < adj){
               maxadj = adj;
          }
    }
    
    return maxadj;
}