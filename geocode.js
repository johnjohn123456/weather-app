const request =require('request');

addressCode = (address,callback) => {
    
    var encodeAddress =encodeURIComponent(address);
    
    request({url :`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json:true}
        
    
        ,(error,response,body) =>{
    if(error){
        callback("Unable to connect to google servers");
        
    }else if(body.status === "ZERO_RESULTS"){
        callback("Invalid address");
        
    }else if(body.status === "OK"){
        callback(undefined ,{
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,   
            longtitude: body.results[0].geometry.location.lng
        });
 
    };
});
    
}


module.exports = {
    addressCode
}