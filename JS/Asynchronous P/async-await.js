//basic structure 
/* async function runTask() {
    try {
        // 1. Wait for the promise to finish and grab its result
        const result = await somePromiseFunction(); 
        console.log(result);
        
    } catch (error) {
        // 2. If the promise fails (rejects), execution jumps straight here
        console.error("Something went wrong:", error);
    }
}
 */

const takeorder = (customer) =>{
    return new Promise((resolve,reject) =>{
        console.log('take order for customer')
        resolve(customer)
    })
 } 

 const processorder = (customer)=>{
    return new Promise((resolve,reject)=>{
        console.log('processing the order')

        setTimeout(()=>{
            console.log('cooking compeleted')
            console.log('order proccesd for customer')
            resolve(customer)
        },3000)
        console.log('print sync stuff')
    })
 }

 async function restaurant(){
    try{
        const sm = await takeorder('customer')
        const sjf = await processorder(sm)
        console.log('completed order')
    }
    catch
    {
        console.log('sorry order can not processed')
    }
 }

 restaurant()