const socketIO =require('socket.io');
const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require('path');
const axios =require('axios');
const GoogleImages = require('google-images');
const client = new GoogleImages('Pixabay', 'AIzaSyAIQ5feSvk17QomaNUdud9Dmvh4XJcXTtc');
console.log(http);
var port=process.env.PORT || 3000;
var app =express();

var publicPath=path.join(__dirname + '/../public');
var server=http.createServer(app);
var io=socketIO(server);
app.use(express.static(publicPath));
io.on('connection',(socket)=>{
  console.log('New User Connected');
  socket.on('disconnect',()=>{
  console.log('User is disconnected');
  });
  socket.on('searchRes',(res)=>{
    console.log(res.text);
    var encodeAddress =encodeURIComponent(res.text);
    console.log(encodeAddress);
    var urlCode=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
    axios.get(urlCode).then((response) => {
    if(response.data.status === "ZERO_RESULTS"){
      throw Error("Unable to find this address");
    }
    console.log(response.data.results[0].formatted_address);   
    location=response.data.results[0].formatted_address;
    lat =response.data.results[0].geometry.location.lat;
    lng =response.data.results[0].geometry.location.lng;
    console.log(lat,lng);
    var weatherInfo = `https://api.darksky.net/forecast/ff7fc6a31c9537e0184424dfc4e23801/${lat},${lng}`;
    return axios.get(weatherInfo);
    }).then((response) => {
      var stamp=new Date(response.data.currently.time * 1000);
      off=stamp.getTimezoneOffset();
      var stamp2=new Date(response.data.hourly.data[6].time *1000);
      var stamp3=new Date(response.data.hourly.data[12].time *1000);
      var stamp4 =new Date(response.data.hourly.data[18].time * 1000);             
      var y =stamp.getFullYear();        
      var m =stamp.getUTCMonth()+1;
      var d =stamp.getDate(); 
      var y2 =stamp2.getFullYear();        
      var m2 =stamp2.getUTCMonth()+1;
      var d2 =stamp2.getDate();
      var y3 =stamp3.getFullYear();        
      var m3 =stamp3.getUTCMonth()+1;
      var d3 =stamp3.getDate();
      var y4 =stamp4.getFullYear();        
      var m4 =stamp4.getUTCMonth()+1;
      var d4 =stamp4.getDate();
      var hour=stamp.getHours();
      var hour3=stamp2.getHours();
      var hour6=stamp3.getHours();
      var hour9=stamp4.getHours();
      var min='0' + stamp.getMinutes()+off;
      var min='0' + stamp2.getMinutes();
      var min='0' + stamp3.getMinutes();
      var min='0' + stamp4.getMinutes();
      var time=(`${hour}:${min}`);
      var time3=(`${hour3}:${min}`);
      var time6=(`${hour6}:${min}`);
      var time9=(`${hour9}:${min}`);
      var date =(`${d}/${m}/${y}`);
      var date2 =(`${d2}/${m2}/${y2}`);
      var date3 =(`${d3}/${m3}/${y3}`);
      var date4 =(`${d4}/${m4}/${y4}`);
      var weather =(response.data.currently.summary );
      var humidity =(response.data.currently.humidity*100 );
      var temperature=(response.data.currently.temperature-32) * 5/9 ;
      var weather12 =(response.data.hourly.data[6].summary );
      var humidity12 =(response.data.hourly.data[6].humidity*100 );
      var temperature12=(response.data.hourly.data[6].temperature-32) * 5/9;
      var temperature123=(response.data.hourly.data[12].temperature-32) * 5/9;
      var weather123 =(response.data.hourly.data[12].summary );
      var humidity123 =(response.data.hourly.data[12].humidity*100 );
      var temperature1234=(response.data.hourly.data[18].temperature-32) * 5/9;
      var weather1234 =(response.data.hourly.data[18].summary );
      var humidity1234 =(response.data.hourly.data[18].humidity*100 );
      console.log(min);
      console.log("sakis");
      console.log(stamp.getMinutes());
      console.log(stamp.getHours());
      io.emit('sendRes',{
        place:res.text,
        date:date,
        date2,
        date3,
        date4,
        time,
        time3,
        time6,
        time9,
        temperature:temperature.toFixed(1) ,
        temperature12:temperature12.toFixed(1)  ,
        temperature123:temperature123.toFixed(1)  ,
        temperature1234:temperature1234.toFixed(1) ,
        humidity:humidity.toFixed(1),
        humidity12:humidity12.toFixed(1),
        humidity123:humidity123.toFixed(1),
        humidity1234:humidity1234.toFixed(1),
        weather:weather,
        weather12,
        weather123,
        weather1234,
        lat,
        lng,
        location
      }) 
    }).catch((e) => {
      if(e.code === "ENOTFOUND"){
        console.log("Unable to find server");
      }else{
        console.log(e.message);
      }      
    })                 
  });
});

server.listen(port ,()=>{
  console.log(`${port}`); 
});