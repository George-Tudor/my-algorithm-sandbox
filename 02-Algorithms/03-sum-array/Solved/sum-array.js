// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let arrSum = 0;
    arr.forEach(element => arrSum += element);
    return arrSum;
};
