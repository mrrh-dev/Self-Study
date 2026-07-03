const takeorder = (customer, callback) => {
    console.log(`take the order for ${customer}`);
    callback(customer);
}

const processorder = (customer, callback) => {
    console.log(`processing order for ${customer}`);
    
    setTimeout(() => {
        console.log('cooking completed');
        console.log(`order processed for ${customer}`);
        callback(customer);
    }, 3000);
}

const completeorder = (customer) => {
    console.log(`completed order for ${customer}`);
}

takeorder('customer1', (customer) => {
    processorder(customer, (customer) => {
        completeorder(customer);
    });
});

console.log('next task')

// this created another problem called callback hell,where promise comes