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
 .then((res) =>{
    console.log(res)
 })
 .catch((err)=>{
    console.log(err)
 }) */


  /* const takeorder = (customer) =>{
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
    .catch((error) => console.log(error)); 


console.log('sync stuff') */
    

// we can also write above function in more simple way.like -> 
/* const takeorder = (customer) =>{
        console.log('take order for customer')
        return Promise.resolve(customer)
 } */

/* const promise1 = Promise.resolve('promise 1 resolved')

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise 2 resolved')
    },2000)
})

Promise.all([promise1,promise2]).then((res)=>{
    console.log(res);
}) */
 
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise 1 resolved')
    },5000)
})

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promise 2 resolved')
    },2000)
})


Promise.race([promise1,promise2]).then((res)=>{
    console.log(res);
})