/*Given a rectangular matrix of characters, add a border of asterisks(*) to it.*/

function addBorder(picture) {
    
    let result = [""];
    let k;
    
    k = picture[0];
    for (let i = 0; i < k.length + 2; i++){
        result[0] += "*";
    }
    
    for (let i = 0; i < picture.length; i++){
        result.push("*");
        for (let j = 0; j < picture[0].length; j++){
            result[i + 1] += picture[i][j];
        }
        result[i + 1] += "*";
    }
    
    result.push(result[0]);
    return result;
}