/*Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!*/

function sortByHeight(a) {
    var res = [];
    var heights = [];
    for(var i = 0; i < a.length; i++) {
      if(a[i] === -1) {
          res.push(i);
      } else {
          heights.push(a[i]);
      }
    }

    var sortedHeights = heights.sort(function(aa, bb) {
        return aa - bb;
    });

    for(var j = 0; j < a.length; j++) {
      if(res.indexOf(j) !== - 1) {
        sortedHeights.splice(j, 0, -1);
      }
    }
    
    return sortedHeights;
}