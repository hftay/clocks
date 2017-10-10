var rotateIdByDegrees = function(id, degrees){
  $(id).css('transform', "rotate(" + degrees + "deg)");
}

var setMinutes = function(amount){
  var degrees = amount / 60 * 360;
  rotateIdByDegrees("#minuteHand", degrees);  
}

var setSeconds = function(amount){
  var degrees = amount / 60 * 360;
  rotateIdByDegrees("#secondHand", degrees);
}

var setHours = function(amount){
  var degrees = amount / 12 * 360;
  rotateIdByDegrees("#hourHand", degrees);
}

setInterval(function(){
  time = new Date();
  setHours(time.getHours());
  setMinutes(time.getMinutes());
  setSeconds(time.getSeconds());
}, 1000);





