
var processorder = (customer) => {
    console.log('processing the order');

    var currentTime = new Date().getTime();
    while (currentTime + 3000 >= new Date().getTime());
    
    console.log('order processed for customer 1');
};

console.log('take the first order');
processorder();
console.log('completed the first order');
