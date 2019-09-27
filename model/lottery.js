const getRandomNums = function (n) {
    
    var arrNumber = new Array(); // Alloc Array
    
    for(var i=0; i<n; i++) {
        arrNumber[i] = Math.floor(Math.random() * 10);
    }
    return arrNumber;
};

module.exports = getRandomNums;