/*Given the string, check if it is a palindrome.*/

function checkPalindrome(inputString) {
    var palindrome = inputString.split("").reverse().join("");
    if (palindrome === inputString){
        return true;
    }else{
        return false;
    }
}