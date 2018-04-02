const request = require('request');
const geocode = require('./geocode.js');
const weather = require('./weather/weather');
const yargs = require('yargs');
 
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

geocode.addressCode(argv.a,(errorMessage ,results) => {
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(results.address);
    weather.getWeather(results.latitude ,results.longtitude,(errorMessage ,weatherResult) =>{
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(`Time:${weatherResult.Time}
  Temparute:${weatherResult.Temperature} Celciums
  It feels like:${weatherResult.Feels}  Celciums`  );
  } 
    });
  }   
});




