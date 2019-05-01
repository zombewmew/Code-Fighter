/*Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.*/

function areSimilar(a, b) {
    
    let countSwap = 0;
    
    for(let i = 0; i < a.length; i++) {
        if( a[i] != b[i]) countSwap++;
    }
    
    a.sort(compareNumeric);
    b.sort(compareNumeric);
    
    comR = compare(a, b);
    
    if (countSwap > 2){
        return false;
    }  
    
    return comR;
}


function compareNumeric(a, b) {
    return a - b;
}

compare = function (a1, a2) {
    return a1.length == a2.length && a1.every((v,i)=>v === a2[i])
}