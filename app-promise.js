
const yargs = require('yargs');
const axios = require('axios'); 

var argv =yargs
.options({
a:{
    demand : true,
    alias: 'address',
    describe :'type -a or -address to put address',
    string :true
}
    })
.help()
.alias('help' ,'h')
.argv;



var encodeAddress =encodeURIComponent(argv.a);

var urlCode=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
         
axios.get(urlCode).then((response) => {
                     if(response.data.status === "ZERO_RESULTS"){
                         throw Error("Unable to find this address");
                     }
            console.log(response.data.results[0].formatted_address);      
                  var lat =response.data.results[0].geometry.location.lat;
                  var lng =response.data.results[0].geometry.location.lng;
                   var weatherInfo = `https://api.darksky.net/forecast/ff7fc6a31c9537e0184424dfc4e23801/${lat},${lng}`;
                     return axios.get(weatherInfo);
                    }).then((response) => {
           var d =new Date();
        d.getHours(); // => 9
d.getMinutes(); // =>  30
d.getSeconds();
          var temperature=(response.data.currently.temperature-32) * 5/9;
          var feels=(response.data.currently.apparentTemperature-32) * 5/9;
           console.log(`Temperature: ${temperature.toFixed(2)} C`);
        console.log(`Feels like: ${feels.toFixed(2)} C+`);
     console.log(`Time: ${d}`);
}).catch((e) => {
    if(e.code === "ENOTFOUND"){
        console.log("Unable to find server");
    }else{
        console.log(e.message);
    }
      
})         
