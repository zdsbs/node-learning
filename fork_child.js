//https://www.exratione.com/2013/05/die-child-process-die/
var time = process.hrtime();
var events = require('events');

process.nextTick(function(){
  console.log("CHILD");
})


//process.on('message',function(m) {
//  console.log("CHILD GOT - "+m);
//});

var delay = 1000;
setTimeout(function(){
  console.log("CHILD - "+delay);
  console.log("CHILD - SEND");
  process.send("HI");
  console.log("CHILD - SENT");
},delay);

process.on('exit', function() {
  console.log("CHILD - exit");
  var diff = process.hrtime(time);
  var miliseconds = Math.floor((diff[0]*1e9 + diff[1])/1000000)
  console.log("CHILD - " + miliseconds);
});


