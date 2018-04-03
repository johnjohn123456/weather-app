var socket =io();
var cel="C";
socket.on('connect',function (){});
socket.on('disconnected',function (){});
socket.on('sendRes',function(res){
  console.log(res.temperature,typeof res.temperature);
  console.log(res.temperature12,typeof res.temperature12);
  var count2=0;
  var count=0;
  var paragraphs=[];
  for(var i in res){
    count++;
  }
  for(var i=0;i<count;i++){
    paragraphs[i]=jQuery('<p></p>');
  }
  console.log(count);
  var k=0;  
  for( k in res){
  if(k.indexOf("temp")>=0){
    paragraphs[count2].html(`${res[k]} C`);
  }
  else if(k.indexOf("humidity")>=0){
    paragraphs[count2].html(`${res[k]} %`);
  }else{
    paragraphs[count2].html(`${res[k]}`);
  }
  count2++;
  }
       
  jQuery('#location').html(paragraphs[23]);
  jQuery('#date').html(paragraphs[1]);
  jQuery('#date12').html(paragraphs[2]);
  jQuery('#date123').html(paragraphs[3]);
  jQuery('#date1234').html(paragraphs[4]);
  jQuery('#time').html(paragraphs[5]);
  jQuery('#time3').html(paragraphs[6]);
  jQuery('#time123').html(paragraphs[7]);
  jQuery('#time1234').html(paragraphs[8]);
  jQuery('#temp').html(paragraphs[9]);
  jQuery('#temp12').html(paragraphs[10]);
  jQuery('#temp123').html(paragraphs[11]);
  jQuery('#temp1234').html(paragraphs[12]);
  jQuery('#hum').html(paragraphs[13]);
  jQuery('#hum12').html(paragraphs[14]);
  jQuery('#hum123').html(paragraphs[15]);
  jQuery('#hum1234').html(paragraphs[16]);
  jQuery('#wea').html(paragraphs[17]);
  jQuery('#wea12').html(paragraphs[18]);
  jQuery('#wea123').html(paragraphs[19]);
  jQuery('#wea1234').html(paragraphs[20]);
        
    //
    //
    //weather forecast
  const mqa = window.matchMedia( "(min-width: 550px)" );
  if (mqa.matches){
    if(res.weather === "Rain"){
      jQuery('#wea').prepend('<img src="/icons/rain.png"/>');
    }
    if(res.weather12 === "Rain"){
      jQuery('#wea12').prepend('<img src="/icons/rain.png"/>');
    }
    if(res.weather123 === "Rain"){
      jQuery('#wea123').prepend('<img src="/icons/rain.png"/>');
    }
    if(res.weather1234 === "Rain"){
      jQuery('#wea1234').prepend('<img src="/icons/rain.png"/>');
    }
    if(res.weather === "Partly Cloudy"){
      jQuery('#wea').prepend('<img src="/icons/cloud.png"/>');
    }
    if(res.weather12 === "Partly Cloudy"){
      jQuery('#wea12').prepend('<img src="/icons/cloud.png"/>');
    }
    if(res.weather123 === "Partly Cloudy"){
      jQuery('#wea123').prepend('<img src="/icons/cloud.png"/>');
    }
    if(res.weather1234 === "Partly Cloudy"){
      jQuery('#wea1234').prepend('<img src="/icons/cloud.png"/>');
    }
    if(res.weather === "Clear" || res.weather === "Dry"){
      jQuery('#wea').prepend('<img src="/icons/clear.png"/>');
    }
    if(res.weather12 === "Clear" || res.weather12 === "Dry"){
        jQuery('#wea12').prepend('<img src="/icons/clear.png"/>');
    }
    if(res.weather123 === "Clear" || res.weather123 === "Dry"){
      jQuery('#wea123').prepend('<img src="/icons/clear.png"/>');
    }
    if(res.weather1234 === "Clear" || res.weather1234 === "Dry"){
      jQuery('#wea1234').prepend('<img src="/icons/clear.png"/>');
    }
    if(res.weather === "Foggy"){
      jQuery('#wea').prepend('<img src="/icons/foggy.png"/>');
    }
    if(res.weather12 === "Foggy"){
      jQuery('#wea12').prepend('<img src="/icons/foggy.png"/>');
    }
    if(res.weather123 === "Foggy"){
      jQuery('#wea123').prepend('<img src="/icons/foggy.png"/>');
    }
    if(res.weather1234 === "Foggy"){
      jQuery('#wea1234').prepend('<img src="/icons/foggy.png"/>');
    }
    if(res.weather === "Mostly Cloudy"){
      jQuery('#wea').prepend('<img src="/icons/mostly_cloud.png"/>');
    }
    if(res.weather12 === "Mostly Cloudy"){
      jQuery('#wea12').prepend('<img src="/icons/mostly_cloud.png"/>');
    }
    if(res.weather123 === "Mostly Cloudy"){
      jQuery('#wea123').prepend('<img src="/icons/mostly_cloud.png"/>');
    }
    if(res.weather1234 === "Mostly Cloudy"){
      jQuery('#wea1234').prepend('<img src="/icons/mostly_cloud.png"/>');
    }
    if(res.weather === "Light Rain"){
      jQuery('#wea').prepend('<img src="/icons/lightRain.png"/>');
    }
    if(res.weather12 === "Light Rain"){
      jQuery('#wea12').prepend('<img src="/icons/lightRain.png"/>');
    }
    if(res.weather123 === "Light Rain"){
      jQuery('#wea123').prepend('<img src="/icons/lightRain.png"/>');
    }
    if(res.weather1234 === "Light Rain"){
      jQuery('#wea1234').prepend('<img src="/icons/lightRain.png"/>');
    }
    if(res.weather === "Drizzle"){
      jQuery('#wea').prepend('<img src="/icons/drizzle.png"/>');
    }
    if(res.weather12 === "Drizzle"){
      jQuery('#wea12').prepend('<img src="/icons/drizzle.png"/>');
    }
    if(res.weather123 === "Drizzle"){
      jQuery('#wea123').prepend('<img src="/icons/drizzle.png"/>');
    }
    if(res.weather1234 === "Drizzle"){
      jQuery('#wea1234').prepend('<img src="/icons/drizzle.png"/>');
    }
    if(res.weather === "Overcast"){
      jQuery('#wea').prepend('<img src="/icons/overcast.png"/>');
    }
    if(res.weather12 === "Overcast"){
      jQuery('#wea12').prepend('<img src="/icons/overcast.png"/>');
    }
    if(res.weather123 === "Overcast"){
      jQuery('#wea123').prepend('<img src="/icons/overcast.png"/>');
    }
    if(res.weather1234 === "Overcast"){
      jQuery('#wea1234').prepend('<img src="/icons/overcast.png"/>');
    }
    
    //HUMIDITY
    
    jQuery('#hum').prepend('<img src="/icons/humidity.png"/>');
    jQuery('#hum12').prepend('<img src="/icons/humidity.png"/>');
    jQuery('#hum123').prepend('<img src="/icons/humidity.png"/>');
    jQuery('#hum1234').prepend('<img src="/icons/humidity.png"/>');
    
    //
    //
    //TEMPERATURE CONTROL
    if(res.temperature < 30 && res.temperature > 18){
      jQuery('#temp').prepend('<img src="/icons/mid-temp.png"/>');
    }
    if(res.temperature12 < 30 && res.temperature12 > 18){
      jQuery('#temp12').prepend('<img src="/icons/mid-temp.png"/>');
    }
    if(res.temperature123 < 30 && res.temperature123 > 18){
      jQuery('#temp123').prepend('<img src="/icons/mid-temp.png"/>');
    }
    if(res.temperature1234 < 30 && res.temperature1234 > 18){
      jQuery('#temp1234').prepend('<img src="/icons/mid-temp.png"/>');
    }
    if(res.temperature >30 ){
      jQuery('#temp').prepend('<img src="/icons/highTemp.png"/>');
    }
    if(res.temperature12 > 30){
      jQuery('#temp12').prepend('<img src="/icons/highTemp.png"/>');
    }
    if(res.temperature123 > 30){
      jQuery('#temp123').prepend('<img src="/icons/highTemp.png"/>');
    }
    if(res.temperature1234 > 30 ){
      jQuery('#temp1234').prepend('<img src="/icons/highTemp.png"/>');
    }
    if(res.temperature < 18 && res.temperature >0){
      jQuery('#temp').prepend('<img src="/icons/lowTemp.png"/>');
    }
    if(res.temperature12 < 18 && res.temperature12 >0){
      jQuery('#temp12').prepend('<img src="/icons/lowTemp.png"/>');
    }
    if(res.temperature123 < 18 && res.temperature123 >0){
      jQuery('#temp123').prepend('<img src="/icons/lowTemp.png"/>');
    }
    if(res.temperature1234 < 18 && res.temperature1234 >0){
      jQuery('#temp1234').prepend('<img src="/icons/lowTemp.png"/>');
    }
    if(res.temperature < 0 ){
      jQuery('#temp').prepend('<img src="/icons/lowestTemp.png"/>');
    }
    if(res.temperature12 < 0){
      jQuery('#temp12').prepend('<img src="/icons/lowestTemp.png"/>');
    }
    if(res.temperature123 < 0){
      jQuery('#temp123').prepend('<img src="/icons/lowestTemp.png"/>');
    }
    if(res.temperature1234 < 0 ){
      jQuery('#temp1234').prepend('<img src="/icons/lowestTemp.png"/>');
    }
    
    jQuery('#time').prepend('<img src="/icons/clock.png"/>');
    jQuery('#time3').prepend('<img src="/icons/clock.png"/>');
    jQuery('#time123').prepend('<img src="/icons/clock.png"/>');
    jQuery('#time1234').prepend('<img src="/icons/clock.png"/>');
  }
    
    //MAX WIDTH 500PX
    //QUERIES
  const mq = window.matchMedia( "(max-width: 500px)" );
  if (mq.matches){
    
     if(res.weather === "Rain"){
        jQuery('#wea').prepend('<img src="/icons/Mrain.png"/>');
    }
      if(res.weather12 === "Rain"){
        jQuery('#wea12').prepend('<img src="/icons/Mrain.png"/>');
    }
      if(res.weather123 === "Rain"){
        jQuery('#wea123').prepend('<img src="/icons/Mrain.png"/>');
    }
      if(res.weather1234 === "Rain"){
        jQuery('#wea1234').prepend('<img src="/icons/Mrain.png"/>');
    }
    
    
    if(res.weather === "Partly Cloudy"){
      jQuery('#wea').prepend('<img src="/icons/cloudM.png"/>');
    }
    if(res.weather12 === "Partly Cloudy"){
      jQuery('#wea12').prepend('<img src="/icons/cloudM.png"/>');
    }
    if(res.weather123 === "Partly Cloudy"){
      console.log("sakisssss");
      jQuery('#wea123').prepend('<img src="/icons/cloudM.png"/>');
    }
    if(res.weather1234 === "Partly Cloudy"){
      jQuery('#wea1234').prepend('<img src="/icons/cloudM.png"/>');
    }
    
    if(res.temperature < 30 && res.temperature > 18){
      jQuery('#temp').prepend('<img src="/icons/mid-tempM.png"/>');
    }
    
    if(res.temperature12 < 30 && res.temperature12 > 18){
      jQuery('#temp12').prepend('<img src="/icons/mid-tempM.png"/>');
    }
    
    if(res.temperature123 < 30 && res.temperature123 > 18){
      jQuery('#temp123').prepend('<img src="/icons/mid-tempM.png"/>');
    }
    
    if(res.temperature1234 < 30 && res.temperature1234 > 18){
      jQuery('#temp1234').prepend('<img src="/icons/mid-tempM.png"/>');
    }
    
    
    if(res.weather === "Clear" || res.weather === "Dry"){
      jQuery('#wea').remove('img');  
      jQuery('#wea').prepend('<img src="/icons/clearM.png"/>');
    }
    if(res.weather12 === "Clear" || res.weather === "Dry"){
      jQuery('#wea12').prepend('<img src="/icons/clearM.png"/>');
    }
    if(res.weather123 === "Clear" || res.weather === "Dry"){
      jQuery('#wea123').prepend('<img src="/icons/clearM.png"/>');
    }
    if(res.weather1234 === "Clear" || res.weather === "Dry"){
      jQuery('#wea1234').prepend('<img src="/icons/clearM.png"/>');
    }
    if(res.weather === "Mostly Cloudy"){
      jQuery('#wea').prepend('<img src="/icons/mostly_cloudM.png"/>');
    }
    if(res.weather12 === "Mostly Cloudy"){
      jQuery('#wea12').prepend('<img src="/icons/mostly_cloudM.png"/>');
    }
    if(res.weather123 === "Mostly Cloudy"){
      jQuery('#wea123').prepend('<img src="/icons/mostly_cloudM.png"/>');
    }
    if(res.weather1234 === "Mostly Cloudy"){
      jQuery('#wea1234').prepend('<img src="/icons/mostly_cloudM.png"/>');
    }
    if(res.weather === "Drizzle"){
      jQuery('#wea').prepend('<img src="/icons/drizzleM.png"/>');
    }
    if(res.weather12 === "Drizzle"){
      jQuery('#wea12').prepend('<img src="/icons/drizzleM.png"/>');
    }
    if(res.weather123 === "Drizzle"){
      jQuery('#wea123').prepend('<img src="/icons/drizzleM.png"/>');
    }
    if(res.weather1234 === "Drizzle"){
      jQuery('#wea1234').prepend('<img src="/icons/drizzleM.png"/>');
    }
    
    if(res.weather === "Overcast"){
      jQuery('#wea').prepend('<img src="/icons/overcastM.png"/>');
    }
    if(res.weather12 === "Overcast"){
      jQuery('#wea12').prepend('<img src="/icons/overcastM.png"/>');
    }
    if(res.weather123 === "Overcast"){
      jQuery('#wea123').prepend('<img src="/icons/overcastM.png"/>');
    }
    if(res.weather1234 === "Overcast"){
      jQuery('#wea1234').prepend('<img src="/icons/overcastM.png"/>');
    }

    if(res.weather === "Foggy"){
      jQuery('#wea').prepend('<img src="/icons/foggyM.png"/>');
    }
    if(res.weather12 === "Foggy"){
      jQuery('#wea12').prepend('<img src="/icons/foggyM.png"/>');
    }
    if(res.weather123 === "Foggy"){
      jQuery('#wea123').prepend('<img src="/icons/foggyM.png"/>');
    }
    if(res.weather1234 === "Foggy"){
      jQuery('#wea1234').prepend('<img src="/icons/foggyM.png"/>');
    }

    if(res.weather === "Light Rain"){
      jQuery('#wea').prepend('<img src="/icons/lightRainM.png"/>');
    }
    if(res.weather12 === "Light Rain"){
      jQuery('#wea12').prepend('<img src="/icons/lightRainM.png"/>');
    }
    if(res.weather123 === "Light Rain"){
      jQuery('#wea123').prepend('<img src="/icons/lightRainM.png"/>');
    }
    if(res.weather1234 === "Light Rain"){
      jQuery('#wea1234').prepend('<img src="/icons/lightRainM.png"/>');
    }
    
    if(res.temperature < 18 && res.temperature >0){
      jQuery('#temp').prepend('<img src="/icons/lowTempM.png"/>');
    }
    if(res.temperature12 < 18 && res.temperature12 >0){
      jQuery('#temp12').prepend('<img src="/icons/lowTempM.png"/>');
    }
    if(res.temperature123 < 18 && res.temperature123 >0){
      jQuery('#temp123').prepend('<img src="/icons/lowTempM.png"/>');
    }
    if(res.temperature1234 < 18 && res.temperature1234 >0){
      jQuery('#temp1234').prepend('<img src="/icons/lowTempM.png"/>');
    }
    if(res.temperature < 0 ){
     jQuery('#temp').prepend('<img src="/icons/lowestTempM.png"/>');
    }
    if(res.temperature12 < 0){
      jQuery('#temp12').prepend('<img src="/icons/lowestTempM.png"/>');
    }
    if(res.temperature123 < 0){
      jQuery('#temp123').prepend('<img src="/icons/lowestTempM.png"/>');
    }
    if(res.temperature1234 < 0 ){
      jQuery('#temp1234').prepend('<img src="/icons/lowestTempM.png"/>');
    }
    if(res.temperature >30 ){
      jQuery('#temp').prepend('<img src="/icons/highTempM.png"/>');
    }
    if(res.temperature12 > 30){
      jQuery('#temp12').prepend('<img src="/icons/highTempM.png"/>');
    }
    if(res.temperature123 > 30){
      jQuery('#temp123').prepend('<img src="/icons/highTempM.png"/>');
    }
    if(res.temperature1234 > 30 ){
      jQuery('#temp1234').prepend('<img src="/icons/highTempM.png"/>');
    }
    jQuery('#hum').prepend('<img src="/icons/humidityM.png"/>');
    jQuery('#hum12').prepend('<img src="/icons/humidityM.png"/>');
    jQuery('#hum123').prepend('<img src="/icons/humidityM.png"/>');
    jQuery('#hum1234').prepend('<img src="/icons/humidityM.png"/>');
    
    jQuery('#time').prepend('<img src="/icons/clockM.png"/>');
    jQuery('#time3').prepend('<img src="/icons/clockM.png"/>');
    jQuery('#time123').prepend('<img src="/icons/clockM.png"/>');
    jQuery('#time1234').prepend('<img src="/icons/clockM.png"/>');
    
    
}
    
    
    
});


jQuery('#search').on('submit',function(e){
    e.preventDefault();
    
   socket.emit('searchRes',{
       text:jQuery('[name=search]').val()
       
   }) 
     $("#search")[0].reset();
});






 