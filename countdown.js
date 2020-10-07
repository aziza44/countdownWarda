jQuery(function($){ 
var lauch = new Date(2021,2,22,17,30,0);
var Days = $('#Days');
var Hours = $('#Hours');
var Minutes = $('#Minutes');
var Secondes = $('#Secondes');
setData();
function setData(){
  var now = new Date();
  var s = (lauch.getTime() - now.getTime())/1000;
  var d = Math.floor(s/86400);
  Days.html('<strong>'+d+'</strong');
  s -= d*86400;
  var h = Math.floor(s/3600);
  Hours.html('<strong>'+h+'</strong');
  s -= h*3600;
  var m = Math.floor(s/60);
  Minutes.html('<strong>'+m+'</strong');
  s -= m*60;
  var s = Math.floor(s);
  Secondes.html('<strong>'+s+'</strong>');
  setTimeout(setDate,1000);

  }

});