var processorder = (customer) => {
    console.log('processing the order');

    var currentTime = new Date().getTime();
    setTimeout(()=>{
    console.log('cooking completed')},3000)
    
    console.log('order processed for customer 1');
};

console.log('take the first order');
processorder();
console.log('completed the first order');

// there is now flow control of this code