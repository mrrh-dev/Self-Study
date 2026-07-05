/* let succes = false;
const fp = new Promise((resolve,reject) => {
    // doing some async stuff
    if(succes)
    {
        resolve('succeful')
    }
    else reject('failed')
})

fp
 .then((res)=> {
    console.log(res)
 })
 .catch((err) =>{
    console.log(err)
 }
) */

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

 const completeorder = (customer) => {
    console.log('comjpleted order for customer')
 }

takeorder('customer')
    .then(processorder)
    .then(completeorder)

