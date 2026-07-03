let succes = false;
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
)