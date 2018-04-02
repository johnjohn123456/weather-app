const request = require('request');

var getWeather = (lat ,long ,callback) => {
  request({url :`https://api.darksky.net/forecast/ff7fc6a31c9537e0184424dfc4e23801/${lat},${long}`,json:true},(error , response ,body) => {
  if(!error || response.statusCode == 200){
    var d =new Date();
    d.getHours(); // => 9
    d.getMinutes(); // =>  30
    d.getSeconds();
    var c =(body.currently.temperature -32) * 5/9;
    var cf =(body.currently.apparentTemperature - 32) * 5/9;
    callback(undefined,
      {Time:d,
      Temperature:c.toFixed(2), 
      Feels:cf.toFixed(2)});
  }else{
    callback("unable to connect to server");
  }  
  });   
}

module.exports = {
getWeather
}