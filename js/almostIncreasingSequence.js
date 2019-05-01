/*Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.*/

function almostIncreasingSequence(sequence) {
    let strikes = 0;
    
    let max = -100000;
    let secondMax = -100000;
    
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] > max) {
            secondMax = max;
            max = sequence[i];
        } else if (sequence[i] > secondMax) {
            max = sequence[i];
            strikes++;
        } else {
            strikes++;
        }
    }
    return strikes < 2;
}