var addAsync =(a , b) => {
    return new Promise((resolve ,reject) =>{
        setTimeout(() =>{
            
             if(typeof a == "number" && typeof b == "number"){
            resolve(a+b);
        }else{
            reject("Arguments must be numbers");
        }
        },1500); 
            
    });
};


addAsync(3,"sa").then((res) =>{
    console.log(res);
    return addAsync(res ,5);
}).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
});
//var somePromise =new Promise((resolve ,reject) => {
//    
//    setTimeout( () => {
//        reject('unbale to work');
//      
//         resolve('It worked');
//          
//      
//       
//    },2500);
//    nc
//})
//
//
//somePromise.then( (message) => {
//    
//    console.log("Succcess" ,message);
//}, (error) => {
//    console.log(error);
//})


