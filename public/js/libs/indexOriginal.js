var socket =io();


socket.on('connect',function (){
    
});


socket.on('disconnected',function (){
    
});
socket.on('sendRes',function(res){
    
     var count=0;
var paragraphs=[];
    for(var i in res){
       
            count++;
        
    }
    
    for(var i;i<count;i++){
        
    }
    console.log(count);
    var loc=jQuery('<p></p>');
    var li=jQuery('<p></p>');
    var p =jQuery('<p></p>');
      var p1 =jQuery('<p></p>');
     var p2 =jQuery('<p></p>');
     var p3 =jQuery('<p></p>');
     var p33 =jQuery('<p></p>');
     var p333 =jQuery('<p></p>');
         var p3333 =jQuery('<p></p>');
    var p112 =jQuery('<p></p>');
     var p212 =jQuery('<p></p>');
     var p312 =jQuery('<p></p>');
     var p12 =jQuery('<p></p>');
     var p1231 =jQuery('<p></p>');
     var p1232 =jQuery('<p></p>');  //3d line
     var p1233 =jQuery('<p></p>');
     var p1234 =jQuery('<p></p>');
     var p12345 =jQuery('<p></p>');
     var p123452 =jQuery('<p></p>');
     var p123453 =jQuery('<p></p>');
     var p123454 =jQuery('<p></p>');
    
     
    loc.text(`${res.location}`);
    li.text(`${res.text} C`);
    p.text(`${res.date}`);
     p1.text(`${res.humidity}%`);
     p2.text(`${res.weather}`);
       p3.text(`${res.time}`);
       p33.text(`${res.time3}`);
      p333.text(`${res.time6}`);
      p3333.text(`${res.time9}`);
     p112.text(`${res.humidity12}%`);
     p212.text(`${res.weather12}`);
       p312.text(`${res.temperature12} C`);
      p12.text(`${res.date2}`);
    p1231.text(`${res.humidity123}%`);
     p1232.text(`${res.weather123}`);
       p1233.text(`${res.temperature123} C`);
      p1234.text(`${res.date3}`);
     p12345.text(`${res.humidity1234}%`);
     p123452.text(`${res.weather1234}`);
       p123453.text(`${res.temperature1234} C`);
      p123454.text(`${res.date4}`);
    
    jQuery('#location').html(loc);
    jQuery('#temp').html(li);
    jQuery('#date').html(p);
    jQuery('#hum').html(p1);
     jQuery('#wea').html(p2);
      jQuery('#time').html(p3);
    jQuery('#time3').html(p33);
        jQuery('#time123').html(p333);
      jQuery('#time1234').html(p3333);
     jQuery('#hum12').html(p112);
     jQuery('#wea12').html(p212);
      jQuery('#temp12').html(p312);
    jQuery('#date12').html(p12);
        jQuery('#hum123').html(p1231);
     jQuery('#wea123').html(p1232);
      jQuery('#temp123').html(p1233);
    jQuery('#date123').html(p1234);
         jQuery('#hum1234').html(p12345);
     jQuery('#wea1234').html(p123452);
      jQuery('#temp1234').html(p123453);
    jQuery('#date1234').html(p123454);
    
    
    
    //
    //
    //weather forecast
    
    
    const mqa = window.matchMedia( "(min-width: 550px)" );
    
    if (mqa.matches){
        
        
        
        
        
        
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
    
    jQuery('#hum').prepend('<img src="/icons/Humidity.png"/>');
    jQuery('#hum12').prepend('<img src="/icons/Humidity.png"/>');
    jQuery('#hum123').prepend('<img src="/icons/Humidity.png"/>');
    jQuery('#hum1234').prepend('<img src="/icons/Humidity.png"/>');
    
    //
    //
    //TEMPERATURE CONTROL
    if(res.text < 30 && res.text > 18){
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
    
     if(res.text >30 ){
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
   
      if(res.text < 18 && res.text >0){
        jQuery('#temp').prepend('<img src="/icons/lowTemp.png"/>');
    }
    
        if(res.temperature12 < 18 && res.text >0){
        jQuery('#temp12').prepend('<img src="/icons/lowTemp.png"/>');
    }
    
        if(res.temperature123 < 18 && res.text >0){
        jQuery('#temp123').prepend('<img src="/icons/lowTemp.png"/>');
    }
    
       if(res.temperature1234 < 18 && res.text >0){
        jQuery('#temp1234').prepend('<img src="/icons/lowTemp.png"/>');
    }
   
        
        if(res.text < 0 ){
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
    
      if(res.text < 30 && res.text > 18){
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
    
    
      if(res.text < 18 && res.text >0){
        jQuery('#temp').prepend('<img src="/icons/lowTempM.png"/>');
    }
    
        if(res.temperature12 < 18 && res.text >0){
        jQuery('#temp12').prepend('<img src="/icons/lowTempM.png"/>');
    }
    
        if(res.temperature123 < 18 && res.text >0){
        jQuery('#temp123').prepend('<img src="/icons/lowTempM.png"/>');
    }
    
       if(res.temperature1234 < 18 && res.text >0){
        jQuery('#temp1234').prepend('<img src="/icons/lowTempM.png"/>');
    }
   
    if(res.text < 0 ){
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
    
       if(res.text >30 ){
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
   
    
    jQuery('#hum').prepend('<img src="/icons/HumidityM.png"/>');
    jQuery('#hum12').prepend('<img src="/icons/HumidityM.png"/>');
    jQuery('#hum123').prepend('<img src="/icons/HumidityM.png"/>');
    jQuery('#hum1234').prepend('<img src="/icons/HumidityM.png"/>');
    
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






 